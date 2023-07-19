export default vars => ({
  '*': {
    boxSizing: 'border-box',
    scrollbarColor: `${vars.textColor} ${vars.backgroundColor}`,
    scrollbarWidth: 'thin',
  },

  '.visible': {
    display: 'inherit !important',
  },

  '::-webkit-scrollbar': {
    width: '6px',
  },

  '::-webkit-scrollbar-track': {
    background: vars.backgroundColor,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: vars.textColor,
    borderRadius: '20px',
  },

  body: {
    backgroundColor: vars.backgroundColor,
    color: vars.textColor,
    fontFamily: vars.fonts,
    fontSize: '15px',
    lineHeight: '1.2',
    margin: '0',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
    overscrollBehavior: 'none',
    padding: '0 15px',
    position: 'absolute',
    width: '100%',
  },

  h1: {
    fontSize: '1.5em',
  },

  h2: {
    fontSize: '2em',
  },

  h3: {
    fontSize: '1.2em',
  },

  h4: {
    fontSize: '1.1em',
  },

  /* h5: {
    fontWeight: '700',
  }, */

  'h1, h2, h3, h4, h5': {
    margin: '1em 0 0.5em',
  },

  p: {
    margin: '0 0 1em',
  },

  a: {
    color: vars.linkColor,

    '&.no-style': {
      textDecoration: 'none',
    },
  },

  nav: {
    lineHeight: '1em',

    ul: {
      color: vars.menuItemColor,
      display: 'inline-block',
      listStyle: 'none',
      margin: '0',
      padding: '0',

      '.active, a.active': {
        textDecoration: 'underline 2px',
      },
    },

    li: {
      cursor: 'pointer',
      float: 'left',
      margin: '0 1em 0 0',
      userSelect: 'none',

      '&:last-child': {
        margin: '0',
      },
    },
  },

  '.nav.menu.toggle.list': {
    textDecoration: 'none',

    span: {
      '&:last-child': {
        color: vars.menuItemColorGreyed,
      },
    },

    '&.exit': {
      span: {
        '&:first-child': {
          color: vars.menuItemColorGreyed,
        },

        '&:last-child': {
          color: vars.menuItemColorActive,
        },
      },
    },
  },

  canvas: {
    display: 'block',
    left: '0',
    position: 'fixed',
    top: '0',
  },

  '.nav': {
    cursor: 'pointer',
  },

  'footer.main': {
    padding: '10px 15px',
    width: '100%',
    textAlign: 'center',
  },

  '.exitScreenButton': {
    height: '26px',
    position: 'fixed',
    right: '15px',
    top: '60px',
    width: '26px',
  },

  '.arrow': {
    display: 'block',
    position: 'absolute',
    right: '0',
    top: '25px',
    width: '15px',

    '&.up': {
      display: 'none',
    },
  },

  'button, .button': {
    border: '0 none',
    cursor: 'pointer',
    fontFamily: vars.fonts,
    letterSpacing: '1px',
    outline: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },

  'button:disabled': {
    background: '#555',
    color: '#0c0c0c',
    cursor: 'not-allowed',
  },
})
