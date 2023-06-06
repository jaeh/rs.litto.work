export const vars = {
  text: {
    dark: '#000000',
    grey: '#4D4D4D'
  },

  background: '#EDEDED',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '.Wrapper': {
      backgroundColor: v.background,
      margin: 0,
      width: '100%',
      maxWidth: 'inherit',
      color: text.dark,
    },

    picture: {
      img: {
        width: '100%',
        height: 'auto',
      },
    },

  }
}
