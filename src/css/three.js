export default vars => ({
  'body.three-running': {
    overflow: 'hidden',
  },

  '#three-container': {
    display: 'none',
  },

  '#three-canvas': {
    backgroundColor: vars.threeCanvasBackgroundColor,
    outline: 'none',
  },

  '#hud': {
    color: vars.hudTextColor,
    display: 'none',
    position: 'relative',
    top: '0',
    left: '0',
    textAlign: 'center',

    '#hud-menu': {
      display: 'none',
    },

    '#hud-menu-sub': {
      display: 'none',
    },

    '#hud-menu-record-video': {
      display: 'none',
    },

    '.w': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      height: 'auto',
      left: '50vw',
      maxWidth: '90vw',
      opacity: '0',
      padding: '20px 70px',
      position: 'fixed',
      top: '50vh',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 500ms, visibility 500ms',
      visibility: 'hidden',

      '&.visible': {
        opacity: '1',
        transition: 'opacity 500ms, visibility 500ms',
        visibility: 'visible',

        /* display: 'none !important', */
      },
    },
  },

  '#hud-exit-button': {
    border: '0 none',
    background: 'transparent',
    cursor: 'pointer',
    left: 'auto',
    margin: '0',
    padding: '0',
    position: 'fixed',
    right: '10px',
    top: '10px',
    userSelect: 'none',
    width: '40px',

    '&:focus': {
      background: 'transparent',
    },
  },

  '#three-video': {
    width: '0',
    height: '0',
    left: '0',
    top: '0',
    position: 'absolute',
    overflow: 'hidden',
  },

  '#toggle-animation-button': {
    width: '66px',
    height: '48px',
    position: 'fixed',
    left: '1em',
    bottom: '1em',
    display: 'none',

    '.visible': {
      display: 'block',
    },

    svg: {
      position: 'absolute',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    '.pause': {
      display: 'none',
    },

    '&.play': {
      '.play': {
        display: 'none',
      },

      '.pause': {
        display: 'block',
      },
    },
  },
})
