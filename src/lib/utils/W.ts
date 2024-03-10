/*
 * W.
 * Adds various often used builtins as minimum letter variables.
 */

export const W: Window = window

W.D = document
W.B = document.body
W.M = Math
W.NAV = window.navigator
W.UA = window.navigator.userAgent.toLowerCase() || ''
W.URL = window.URL || window.webkitURL
W.LOC = window.location

W.pxRatio = window.devicePixelRatio
