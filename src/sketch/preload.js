/* eslint-disable no-undef */
import skaterPng from '../assets/skater.png'
import comicZineFont from '../assets/comic_zine_ot.otf'

export let skaterIcon
export let comicZine

export function preload () {
  skaterIcon = loadImage(skaterPng)
  comicZine = loadFont(comicZineFont)
}
