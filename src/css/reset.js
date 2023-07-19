export default {
  [`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6,
article,
aside,
details,
figcaption,
footer,
header,
hgroup,
menu,
nav,
section
`]: {
    margin: '0',
    padding: '0',
  },

  /* Headings */
  [`
h1,
h2,
h3,
h4,
h5,
h6
`]: {
    fontSize: '100%',
    fontWeight: '400',
  },

  /* List */
  ul: {
    listStyle: 'none',
  },

  /* Form */
  [`
button,
input,
select,
textarea
`]: {
    margin: '0',
  },

  /* Box sizing */
  html: {
    boxSizing: 'border-box',
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },

  /* Media */
  [`
img,
svg,
embed,
iframe,
object,
video
`]: {
    height: 'auto',
    maxWidth: '100%',
  },

  audio: {
    maxWidth: '100%',
  },

  /* Iframe */
  iframe: {
    border: '0',
  },

  /* Table */
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },

  'td, th': {
    padding: '0',
    textAlign: 'left',
  },

  b: {
    fontWeight: '600',
    fontSize: '1.01em',
  },

  i: {
    fontStyle: 'italic',
  },
}
