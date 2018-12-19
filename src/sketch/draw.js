/* eslint-disable no-undef */
import { skaters } from './setup'
import { bg } from '../elements/background'

export function draw () {
  Object.keys(skaters)
    .forEach(_ => skaters[_].animate())
  image(bg, 0, 0)
  Object.keys(skaters)
    .sort((a, b) => skaters[a].y > skaters[b].y)
    .forEach(_ => skaters[_].draw())
}
