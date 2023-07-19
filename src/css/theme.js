export default (v = {}) => ({
  body: {
    fontFamily: 'notosans',
    padding: 0,
    backgroundColor: v.background,
    color: v.text.dark,
  },

  '.wrapper': {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1300px',
  },

  p: {
    margin: 0,
  },

  picture: {
    img: {
      width: '100%',
      height: 'auto',
    },
  },

  '.Announcement': {
    margin: '3em 1em',

    picture: {
      img: {
        maxWidth: '800px',
        margin: '0 0 2em',
      },
    },

    p: {
      fontSize: '1.5em',
      fontStyle: 'italic',
    },

    '.description': {
      margin: '5em 0 0',
      fontSize: '1.2em',
    },
  },

  '.Arrow': {
    float: 'left',
    height: '3.8em',
    width: 'auto',
    margin: '0 0.5em 0 0',
  },

  '.ArtifactListItem': {
    clear: 'both',
    margin: '0 0 2em',

    '&:hover, &:focus': {
      'button.show-artifact': {
        width: 'auto',
        maxWidth: '500px',
        // transition: 'max-width 0.5s, margin 0.5s',
        margin: '0 0.5em 0 1.9em',
      },
    },

    h3: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 0,
      fontSize: '1.1em',
      lineHeight: '1.1em',
      margin: '1em 0 0',
    },

    '.date': {
      color: v.text.grey,
    },
    '.latlng': {
      color: v.text.grey,
    },
  },

  '.Year': {
    h2: {
      fontStyle: 'italic',
      fontSize: '3em',
      padding: '.2em 0',
      margin: 0,
    },

    '.Lines': {
      margin: '3em 0 0',
      maxWidth: '40%',
    },

    '.Preview': {
      display: 'block',
      margin: '0 0 2em',
    },
  },

  'button.show-artifact': {
    width: 0,
    maxWidth: 0,
    float: 'left',
    background: 'transparent',
    color: v.text.dark,
    overflow: 'hidden',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '1.3em',
    padding: 0,
    transition: 'max-width 0.5s, margin 0.5s',
    lineHeight: '1em',
  },
})
