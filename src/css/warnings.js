export default vars => ({
  '.warning': {
    backgroundColor: vars.timeoutWarningContainerBackgroundColor,
    color: vars.timeoutWarningContainerTextColor,
    display: 'none',
    left: '15px',
    position: 'fixed',
    textAlign: 'center',
    top: '36px',
    width: 'calc(100vw - 30px)',

    '.container': {
      margin: '0 auto',
      maxWidth: '400px',
      padding: '15px',

      button: {
        margin: '1em auto',
      },
    },

    svg: {
      width: '50px',
      height: '50px',
    },

    '.w': {
      display: 'none',
    },

    '.cancel-button': {
      cursor: 'pointer',
      position: 'absolute',
      right: '15px',
      top: '15px',
    },
  },

  '#timeout-warning-webgl-disabled': {
    display: 'none',
  },

  '#timeout-warning-info, #timeout-warning-confirm, #timeout-warning-header, #timeout-warning-header-done':
    {
      display: 'none',
    },
})
