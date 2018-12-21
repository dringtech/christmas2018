/* eslint-disable no-undef */
import { bg, makeBackground } from '../elements/background'
import { createSnowstorm } from '../sketch/setup'

export function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  if (bg !== undefined) bg.remove()
  createSnowstorm()
  makeBackground()
}
