/* eslint-disable no-undef */
class Snowflake {
  constructor () {
    this.x = random(windowWidth)
    this.y = random(windowHeight)
    this.speed = random(1, 2)
    this.noiseSeed = random(10000)
    this.offsetRadius = 100
    this.turbulence = 0.01
  }

  animate () {
    this.y += this.speed
    if (this.y > height + 10) this.y = -10
    this.noiseSeed += this.turbulence
  }
  draw () {
    const xOff = (2 * noise(this.noiseSeed, 0) - 1) * this.offsetRadius / 2
    const yOff = (2 * noise(0, this.noiseSeed) - 1) * this.offsetRadius / 2
    push()
    translate(this.x, this.y)
    ellipse(xOff, yOff, 10, 10)
    pop()
  }
}

export function createSnowflake () {
  return new Snowflake()
}
