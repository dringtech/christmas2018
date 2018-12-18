/* eslint-disable no-undef */
import { skaterIcon } from './preload'
import { bg, makeBackground } from '../elements/background'
import { createSkater } from '../elements/skater'

export const skaters = {}

export function setup () {
  createCanvas(windowWidth, windowHeight)
  skaters.bea = createSkater({ image: skaterIcon, x: -50, y: windowHeight / 2 })
  skaters.martha = createSkater({ image: skaterIcon, x: -50, y: windowHeight / 2 })
  skaters.rebecca = createSkater({ image: skaterIcon, x: -50, y: windowHeight / 2 })
  skaters.giles = createSkater({ image: skaterIcon, x: -50, y: windowHeight / 2 })
  makeBackground()
  image(bg, 0, 0)
}
