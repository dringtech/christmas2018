/* eslint-disable no-undef */
import { skaterIcon, gilesHead, beaHead, marthaHead, rebeccaHead } from './preload'
import { bg, makeBackground } from '../elements/background'
import { createSkater } from '../elements/skater'
import { createSnowflake } from '../elements/snowflake'
import { setupSound } from '../elements/tune/sound'
import { createButton } from '../elements/button'

export const skaters = {}
export const snowstorm = []
export let soundButton

const numFlakes = 75

export function createSnowstorm () {
  for (let i = 0; i < numFlakes; i++) snowstorm[i] = createSnowflake()
}

export function setup () {
  setupSound()
  soundButton = createButton()

  createCanvas(windowWidth, windowHeight)
  skaters.bea = createSkater({ image: skaterIcon, face: beaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  skaters.martha = createSkater({ image: skaterIcon, face: marthaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  skaters.rebecca = createSkater({ image: skaterIcon, face: rebeccaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  skaters.giles = createSkater({ image: skaterIcon, face: gilesHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  createSnowstorm()

  makeBackground()
  image(bg, 0, 0)
}
