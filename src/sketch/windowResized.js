/* eslint-disable no-undef */
import { bg, makeBackground } from '../elements/background'

export function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  if (bg !== undefined) bg.remove()
  makeBackground()
}
