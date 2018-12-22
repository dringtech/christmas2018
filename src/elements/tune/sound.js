/* eslint-disable no-undef */
import { getScore } from './score'

export let tune
let synth

function makeSound (time, note) {
  synth.play(note, 1, time, 1)
}

export function setupSound () {
  synth = new p5.PolySynth()
  synth.setADSR(0.01, 1, 0.5, 10)

  const score = getScore()
  const partA = new p5.Part()
  score.A.forEach((phrase, i) => {
    partA.addPhrase(new p5.Phrase(`A${i}`, makeSound, phrase))
  })
  tune = partA
  tune.setBPM(60)
}

export function playTune () {
  tune.loop()
}