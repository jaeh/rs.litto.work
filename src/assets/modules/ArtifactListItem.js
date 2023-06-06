export const View = artifact => {
  return div({ class: 'ArtifactListItem' }, [
    Arrow(),
    h3(artifact.title),
    div({ class: 'date' }, artifact.date),
    div({ class: 'latlng' }, [artifact.lat, ', ', artifact.lng]),
  ])
}

export const style = vars => ({
  clear: 'both',
  margin: '0 0 2em',

  h3: {
    fontWeight: 'bold',
    padding: 0,
    fontSize: '1.1em',
    lineHeight: '1.1em',
  },

  '.date, .latlng': {
    color: vars.text.grey,
  },
})
