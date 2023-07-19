export default {
  '.leaflet': {
    '&-map-pane canvas': { zIndex: 100 },

    '&-map-pane svg, &-tile-pane': { zIndex: 200 },

    '&-pane, &-overlay-pane': { zIndex: 400 },
    '&-shadow-pane': { zIndex: 500 },
    '&-marker-pane': { zIndex: 600 },
    '&-tooltip-pane': { zIndex: 650 },
    '&-popup-pane': { zIndex: 700 },
    '&-zoom-box': { zIndex: 800 },
  },

  '.leaflet-control': {
    zIndex: 800,
  },

  '.screen': {
    zIndex: 999,
  },

  '.leaflet-top, .leaflet-bottom, header.main, footer.main': {
    zIndex: 1000,
  },

  '.warning': {
    zIndex: 2001,
  },

  '#onboardings': {
    zIndex: 3000,
  },

  '.popup': {
    zIndex: 4000,
  },

  '#Locator': {
    zIndex: 5000,
  },

  '#three-canvas': {
    zIndex: 10000,
  },

  '#hud, #hud .w, #hud-exit-button': {
    zIndex: 11000,
  },
}
