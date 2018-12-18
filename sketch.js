/* eslint-disable no-undef, no-unused-vars */
var skaters = {};
var skater;
var comicZine;
var bg;
function preload() {
  skater = loadImage('assets/images/skater.png');
  comicZine = loadFont('assets/fonts/comic_zine_ot.otf');
}
function setup () {
  createCanvas(windowWidth, windowHeight);
  skaters.bea = new sprites.Person({image: skater, x: -50, y: windowHeight/2});
  skaters.martha = new sprites.Person({image: skater, x: -50, y: windowHeight/2});
  skaters.rebecca = new sprites.Person({image: skater, x: -50, y: windowHeight/2});
  skaters.giles = new sprites.Person({image: skater, x: -50, y: windowHeight/2});
  makeBackground();
  image(bg,0,0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (bg !== undefined) bg.remove();
  makeBackground();
}
function mountains(canvas, mountainTop, mountainHeight) {
  var bumpiness = 0.005;
  canvas.beginShape(); canvas.vertex(0,windowHeight);
  for (var x = 0; x < windowWidth; x++ ) {
    canvas.vertex(x, noise(mountainTop+x*bumpiness)*mountainHeight+mountainTop);
  }
  canvas.vertex(windowWidth, windowHeight); canvas.endShape();
}
function makeBackground () {
  bg = createGraphics(windowWidth, windowHeight);
  var skyColor = color('#adeeff');
  var textColor = color('#ed225d');
  bg.background(skyColor);
  bg.noStroke();
  bg.fill(225); mountains(bg, 50, 100);
  bg.fill(240); mountains(bg, 90, 100);
  bg.fill(255); mountains(bg, windowHeight/2, 25);
  bg.textAlign(CENTER);
  bg.textFont(comicZine, 64);
  bg.fill(textColor);
  bg.text('Merry Christmas from The Drings', windowWidth/2, 50);
}
function draw () {
  image(bg,0,0);
  Object.keys(skaters).forEach(function(_) { skaters[_].animate(); skaters[_].draw(); });
}
