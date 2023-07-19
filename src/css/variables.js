const textColor = '#0c0c0c'
const backgroundColor = '#fafafa'

export default {
  fonts: `
    notosans,
    ubuntu,
    "Segoe UI",
    roboto,
    "Lucida Grande",
    "Helvetica Neue",
    helvetica,
    arial,
    sans-serif
`,
  backgroundColor,
  textColor,
  highlightColor: '#07fff5',
  threeCanvasBackgroundColor: '#000',
  linkColor: '#000',
  topOffset: '30px',
  topOffsetTimesTwo: '70px',

  /* this gets applied to the map popup buttons */
  buttonBackgroundColor: textColor,
  buttonTextColor: backgroundColor,
  buttonShadowColorDark: '#e0e0e0',
  buttonShadowColorLight: '#fff',
  buttonInverseShadowColorDark: '#000',
  buttonInverseColorLight: '#0c0c0c',

  /* warnings pop up in unsupported browsers */
  warningContainerBackgroundColor: backgroundColor,
  timeoutWarningContainerBackgroundColor: 'rgba(0, 0, 0, 0.8)',
  timeoutWarningContainerTextColor: backgroundColor,

  /* gets applied to the map messagebox popups */
  messageboxBackgroundColor: textColor,
  messageboxTextColor: backgroundColor,
  messageboxErrorTextColor: '#f8f822',
  menuItemColor: '#333',
  menuItemColorActive: '#0c0c0c',
  menuItemColorGreyed: '#666',

  /* this is the border color between screen list items */
  screenListItemBorderColor: '#e0e0e0',
  splitMediumScreenContainerWidth: '500px',
  splitMediumScreenMapOffset: '520px',
  splitMediumScreenOnboardingOffset: '515px',
  splitBigScreenContainerWidth: '600px',
  splitBigScreenMapOffset: '620px',
  splitBigScreenPopupOffset: '615px',
  splitHugeScreenContainerWidth: '700px',
  splitHugeScreenMapOffset: '720px',
  splitHugeScreenPopupOffset: '720px',
  transitionDuration: '300ms',
  hudTextColor: backgroundColor,
  popupContainerBackgroundColor: 'rgba(0, 0, 0, 0.8)',
  popupContainerTextColor: backgroundColor,
  screenMaxWidth: '1600px',

  text: {
    dark: '#000000',
    grey: '#4D4D4D',
  },

  background: '#EDEDED',
}
