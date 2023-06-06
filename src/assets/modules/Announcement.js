export const View = state => div({ class: 'Announcement' }, [
  Picture({ name: '/img/branding', height: 600, width: 1920 }),
  state.list.map(a => p(a)),

  div({ class: 'description' }, state.description.map(a => typeof a === 'string' ? a : Link(a))),
])

export const style = {
  margin: '3em 1em',

  picture: {
    img: {
      maxWidth: '800px',
    },
  },

  p: {
    fontSize: '1.5em',
    fontStyle: 'italic',
  },

  '.description': {
    margin: '10em 0 0',
  },
}