export const View = ({ artifacts, year }) =>
  div({ class: 'Year' }, [
    Img({ src: '/img/lines.png', class: 'Lines', height: 4, width: 300 }),
    h2(year),
    Picture({ class: 'Preview', name: `/img/graphic_${year}`, height: 1180, width: 1920 }),
    div(artifacts.map(ArtifactListItem)),
  ])

export const style = {
  h2: {
    fontStyle: 'italic',
    fontSize: '3em',
    padding: '.2em 1em',
  },

  '.Lines': {
    margin: '3em 0 0',
  },

  '.Preview': {
    display: 'block',
    margin: '0 0 2em',
  },
}
