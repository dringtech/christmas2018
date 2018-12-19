/* eslint-disable no-undef */
import { skaterIcon, gilesHead, beaHead } from './preload'
import { bg, makeBackground } from '../elements/background'
import { createSkater } from '../elements/skater'

export const skaters = {}

export function setup () {
  createCanvas(windowWidth, windowHeight)
  skaters.bea = createSkater({ image: skaterIcon, face: beaHead, x: -50, y: windowHeight / 2 })
  skaters.martha = createSkater({ image: skaterIcon, face: gilesHead, x: -50, y: windowHeight / 2 })
  skaters.rebecca = createSkater({ image: skaterIcon, face: gilesHead, x: -50, y: windowHeight / 2 })
  skaters.giles = createSkater({ image: skaterIcon, face: gilesHead, x: -50, y: windowHeight / 2 })
  makeBackground()
  image(bg, 0, 0)
}
