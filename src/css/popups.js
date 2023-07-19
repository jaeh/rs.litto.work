export default vars => ({
  '.popup': {
    backgroundColor: vars.popupContainerBackgroundColor,
    color: vars.popupContainerTextColor,
    display: 'none',
    left: '15px',
    position: 'fixed',
    textAlign: 'center',
    width: 'calc(100vw - 30px)',
    top: '36px',

    '.container': {
      margin: '0 auto',
      maxWidth: '400px',
      padding: '15px',
    },

    '.cancel-button': {
      cursor: 'pointer',
      position: 'absolute',
      right: '15px',
      top: '15px',
    },
  },
})
