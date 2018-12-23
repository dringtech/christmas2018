/* eslint-disable no-undef */
import { comicZine } from '../sketch/preload'

function mountains (canvas, mountainTop, mountainHeight) {
  var bumpiness = 0.005
  canvas.beginShape(); canvas.vertex(0, windowHeight)
  for (var x = 0; x < windowWidth; x++) {
    canvas.vertex(x, noise(mountainTop + x * bumpiness) * mountainHeight + mountainTop)
  }
  canvas.vertex(windowWidth, windowHeight); canvas.endShape()
}

export let bg

function colourRange (point) {
  return lerpColor(color('#e5e5ff'), color('#ffffff'), point)
}

export function makeBackground () {
  bg = createGraphics(windowWidth, windowHeight)
  var skyColor = color('#adeeff')
  var textColor = color('#ed225d')
  bg.background(skyColor)
  bg.noStroke()
  bg.colorMode(HSB)

  bg.fill(colourRange(0)); mountains(bg, 50, 100)
  bg.fill(colourRange(0.33)); mountains(bg, 90, 100)
  bg.fill(colourRange(1)); mountains(bg, windowHeight / 2, 25)
  bg.textAlign(CENTER)
  bg.textFont(comicZine, 64)
  bg.fill(textColor)
  bg.text('Merry Christmas', windowWidth / 2, 50)
  bg.text('from The Drings', windowWidth / 2, 100)
}
