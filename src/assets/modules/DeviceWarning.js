export const View = () =>
div({ id: 'warning', class: 'warning' }, [
  div({ class:'container' }, [
    div({ class:'ios w' }, [
      p( {class:'no-webxr w' }, 'Your device supports augmented reality applications, but this browser does not.'),

      p({ class:'all w' }, [
        'Please download the',
        Link({
          to: 'https://apps.apple.com/us/app/webxr-viewer/id1295998056',
        }, 'Mozilla Webxr Viewer'),
        'for a better experience in the Artificial Museum.',

        Link({ class:'button styled margin',
          to: 'https://apps.apple.com/us/app/webxr-viewer/id1295998056',
        }, 'Install Webxr Viewer'),
      ]),
    ]),

    div({ class: 'android w' }, [
      p({ class: 'no chrome w' }, 'Currently, only Blink based browsers support augmented reality. This includes Brave Browser, Google Chrome, Samsung Browser and others.'),

      p({ class: 'old chrome w' }, 'Your version of chrome is too old and does not support augmented reality.'),

      p( { class: 'all w' }, [
        'To get access to ar, please update your browser.',
        Link({
          class: 'button styled margin',
          to: 'https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US&gl=US',
        }, 'Update Chrome.'),

        Link({ class: 'button styled margin',
          to:'https://play.google.com/store/apps/details?id=com.brave.browser',
        }, 'Update Brave.'),
      ]),

    div({ class: 'macos w' }, [
      p({ class: 'safari w'}, 'Please use a different browser for the artificial museum, this browser is missing some critical features and will not provide an optimal experience.'),
    ]),
    p('If you insist on continuing, just press this button:'),
      button({ id: 'close-warning', class: 'styled' },'Understood'),
      ]),
      ]),
])
