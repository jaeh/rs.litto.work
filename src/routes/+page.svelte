extends /layout.pug

block pageBody
  +Picture({ file: '/img/hero', height: 1000, width: 2000 })

  div.Announcement
    +Picture({ file: '/img/branding', height: 237, width: 800 })

    p
      | Augmented Reality Installations by
      | !{ ' ' }
      a(target="_blank" href='https://litto.work/') Litto

    div.description
      | Reterritorialized Spaces is a hybrid performance in public space
      | entailing one performer projecting real space into virtual space
      | by scanning with a LIDAR scanner through a mirror.
      | The mirror breaks the geometric and perspective properties of space,
      | resulting in experimental forms of spatial perception.
      | In addition, the movement of the performer and the interaction
      | with the audience influence the course of the performance.
      | A virtual monument accessible with augmented reality on the
      | !{ ' ' }
      a(target="_blank" href='https://artificialmuseum.com/') artificialmuseum.com
      | !{ ' ' }
      | will remain.

  - const years = ['2021', '2022', '2023']

  each year in years
    - const artifacts = pageMeta.artifacts.filter(a => a.date.startsWith(year))

    div.Year
      img.Lines(src='/img/lines.png' height="4" width="300")
      h2= year
      +Picture({ class: 'Preview', file: `/img/graphic_${year}`, height: 1180, width: 1920 })

      div
        each artifact in artifacts
           div.ArtifactListItem
            if artifact.config
              button.show-artifact(data-title!= artifact.title)
                | Enter 3D
                br
                | Experience

            img.Arrow(src= '/img/arrow.png' height="60", width="30" alt='')

            h3= artifact.title
            div.date= artifact.date
            div.latlng= `${artifact.lat}, ${artifact.lng}`

  footer.main
    | Made with support by the
    | !{ ' ' }
    a(target="_blank" href='https://thesystem.at') SystemKollektiv

  //- hud has to be a direct child of body for webxr!
  include /components/hud.pug

  div#three-container

  script!= pageMeta.script

  script(type="module" src="/main.js")
