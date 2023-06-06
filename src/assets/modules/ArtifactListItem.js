export const View = artifact => {

  return div({ class: 'ArtifactListItem' }, [
    Arrow(),
    h3(artifact.title),
    div({ class: 'date' }, artifact.date),
    div({ class: 'latlng' }, [artifact.lat, ', ', artifact.lng]),
  ])
}

export const style = vars => ({
  h3: {
    fontWeight: 'bold',
  },

  '.date, .latlng': {
    color: vars.text.grey,
  },
})