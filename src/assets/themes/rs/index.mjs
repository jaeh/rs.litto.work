export const vars = {
  text: {
    dark: '#000000',
    grey: '#4D4D4D',
  },

  background: '#EDEDED',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.artificialmuseum.com/font/',

      styles: {
        normal: {
          400: ['Noto Sans', 'NotoSans'],
          700: ['Noto Sans Black', 'NotoSans-Black'],
        },
        italic: {
          400: ['Noto Sans Italic', 'NotoSans-Italic'],
        },
      },
    },

    body: {
      fontFamily: 'notosans',
      backgroundColor: v.background,
      color: v.text.dark,
    },

    '.Wrapper': {
      // margin: '0 auto',
      width: '100%',
      // maxWidth: 'inherit',
    },

    picture: {
      img: {
        width: '100%',
        height: 'auto',
      },
    },
  }
}
