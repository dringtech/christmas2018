/* eslint-disable no-undef */
import skaterPng from '../assets/skating-base.png'
import comicZineFont from '../assets/comic_zine_ot.otf'
import gilesHeadPng from '../assets/giles-head.png'
import beaHeadPng from '../assets/bea-head.png'
import marthaHeadPng from '../assets/martha-head.png'
import rebeccaHeadPng from '../assets/rebecca-head.png'

export let skaterIcon
export let comicZine
export let beaHead
export let gilesHead
export let marthaHead
export let rebeccaHead

export function preload () {
  skaterIcon = loadImage(skaterPng)
  comicZine = loadFont(comicZineFont)
  beaHead = loadImage(beaHeadPng)
  gilesHead = loadImage(gilesHeadPng)
  marthaHead = loadImage(marthaHeadPng)
  rebeccaHead = loadImage(rebeccaHeadPng)
}
