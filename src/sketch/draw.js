/* eslint-disable no-undef */
import { skaters } from './setup'
import { bg } from '../elements/background'

export function draw () {
  image(bg, 0, 0)
  Object.keys(skaters).forEach(function (_) { skaters[_].animate(); skaters[_].draw() })
}
