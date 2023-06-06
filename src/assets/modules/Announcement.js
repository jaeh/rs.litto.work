export const View = state => div({ class: 'Announcement' }, [
  Picture({ name: '/img/branding', height: 600, width: 1920 }),
  state.list.map(a => p(a)),

  div({ class: 'description' }, state.description.map(a => typeof a === 'string' ? a : Link(a))),
])

export const style = {
  margin: '1em 2em',

  p: {
    fontSize: '1.5em',
    fontStyle: 'italic',
  },

  '.description': {
    margin: '10em 0 0',
  },
}