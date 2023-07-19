import path from 'path'

import cli from '@magic/cli'
import log from '@magic/log'

const short = str => str.trim().replace(/\n/gim, ' ').replace(/\s+/gim, ' ')

const sortByName = (a, b) => {
  let aName = a.name
  if (Array.isArray(a.name)) {
    aName = a.name.join(' ')
  }

  let bName = b.name
  if (Array.isArray(b.name)) {
    bName = b.name.join(' ')
  }

  return aName.toLowerCase() > bName.toLowerCase() ? 1 : -1
}

export const prepareData = async args => {
  const startTime = log.hrtime()

  // call a cli script to force a reload of our database at rebuild time
  const execPath = path.join(process.cwd(), 'build', 'tasks', 'db.js')
  const dbData = await cli.exec(execPath)

  const db = JSON.parse(dbData.trim())

  const data = {}

  const { glbUrl, mapUrl, mediaUrl, rootUrl, staticUrl, staging } = args

  data.pageMeta = {
    ...db.pageMeta,
    glbUrl,
    mapUrl,
    mediaUrl,
    rootUrl,
    staticUrl,
    staging,
  }

  data.languages = db.languages
  data.world = db.world

  data.artifacts = db.artifacts
    .map(artifact => {
      try {
        if (!args.staging && artifact.published === false) {
          return
        }

        const location = db.locations.find(l => l.slug === artifact.location)

        let { logo = 'object.svg' } = artifact

        /*
         * custom logo
         */
        if (!logo.startsWith(staticUrl)) {
          logo = `${staticUrl}/map/marker/${logo}`
        }

        /*
         * custom location logo
         */
        if (location?.logo && !location?.logo?.startsWith(staticUrl)) {
          location.logo = `${staticUrl}/map/marker/logo/${location.logo}`
        }

        const exhibition = db.exhibitions.find(e => e.slug === artifact.exhibition) || ''

        const finalObject = {
          ...artifact,
          logo,
          location,
          exhibition,
        }

        finalObject.artists = db.artists
          .filter(a => artifact.artists && artifact.artists.includes(a.slug))
          .map(({ name, url, slug }) => ({ name, url, slug }))

        finalObject.artists3d = db.artists
          .filter(a => artifact.artists3d && artifact.artists3d.includes(a.slug))
          .map(({ name, url, slug }) => ({ name, url, slug }))

        finalObject.sound = db.artists
          .filter(a => artifact.sound && artifact.sound.includes(a.slug))
          .map(({ name, url, slug }) => ({ name, url, slug }))

        finalObject.performance = db.artists
          .filter(a => artifact.performance && artifact.performance.includes(a.slug))
          .map(({ name, url, slug }) => ({ name, url, slug }))

        let { description } = artifact
        if (description) {
          const descriptionArray = Array.isArray(description) ? description : [description]

          finalObject.description = descriptionArray.map(short)
        }

        return finalObject
      } catch (e) {
        const err = [`${artifact.slug} error`, e]
        console.error(err)
        process.exit()
      }
    })
    .sort(sortByName)
    .filter(a => a)

  const hasArtifactsByType = (slug, key) =>
    db.artifacts.filter(
      o => (args.staging || o.published !== false) && o[key] && o[key].includes(slug),
    )

  const artistHasArtifacts = slug => {
    const artifacts = hasArtifactsByType(slug, 'artists')
    const artifacts3d = hasArtifactsByType(slug, 'artists3d')
    const sound = hasArtifactsByType(slug, 'sound')
    const performance = hasArtifactsByType(slug, 'performance')

    const has = artifacts.length || artifacts3d.length || sound.length || performance.length

    if (!has) {
      return false
    }

    const result = {}
    if (artifacts.length) {
      result.artifacts = artifacts
    }
    if (artifacts3d.length) {
      result.artifacts3d = artifacts3d
    }
    if (sound.length) {
      result.sound = sound
    }
    if (performance.length) {
      result.performance = performance
    }

    return result
  }

  data.artists = db.artists
    .map(artist => {
      const artifactData = artistHasArtifacts(artist.slug)

      if (!artifactData) {
        return false
      }

      return {
        ...artist,
        ...artifactData,
      }
    })
    .filter(a => a)
    .sort(sortByName)

  data.locations = db.locations
    .map(location => {
      const artifacts = data.artifacts.filter(artifact => {
        const isPub = args.staging || artifact.published !== false

        return isPub && artifact.location.slug === location.slug
      })

      if (!artifacts.length) {
        return
      }

      return {
        ...location,
        artifacts,
      }
    })
    .filter(a => a)
    .sort(sortByName)

  data.exhibitions = db.exhibitions
    .map(exhibition => {
      const location = data.locations.find(location => location.slug === exhibition.location)

      const artifacts = data.artifacts.filter(
        artifact => artifact?.exhibition?.slug === exhibition?.slug,
      )

      if (!artifacts.length) {
        return false
      }

      // const artists = data.artists.find(artist => artifacts.some(a => a.artists.includes(artist.slug)))
      // const artists3d = data.artists.find(artist => artifacts.some(a => a.artists3d.includes(artist.slug)))

      return {
        ...exhibition,
        artifacts,
        location,
        // artists,
        // artists3d,
      }
    })
    .filter(a => a)
    .sort(sortByName)

  data.cities = db.cities
    .map(city => {
      city.artifactCount = data.artifacts.filter(artifact => artifact.city === city.slug).length

      return city
    })
    .sort((a, b) => (a.artifactCount > b.artifactCount ? -1 : 1))

  data.planets = db.planets
    .map(planet => {
      planet.artifactCount = data.artifacts.filter(artifact => artifact.city === planet.slug).length

      return planet
    })
    .sort((a, b) => (a.artifactCount > b.artifactCount ? -1 : 1))

  log.timeTaken(startTime, 'prepareData took')
  return data
}
