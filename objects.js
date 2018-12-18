(function () {

  var boundaryMargin = 105;
  // var purlinDelta = 0.0005;
  var purlinDelta = 0.005;
  var friction = 0.1;

  function offLeft () {
    if (this.x < -boundaryMargin ) {
      this.direction *= -1;
      this.boundaryTest = offRight;
      this.createSprite();
    }
  }
  function offRight () {
    if (this.x > windowWidth + boundaryMargin) {
      this.direction *= -1;
      this.boundaryTest = offLeft;
      this.createSprite();
    }
  }
  function setSpeed () {
    return random(5, 10);
  }

  class Person {
    constructor(params) {
      this.x = params.x; this.y = params.y;
      this.direction = random([1, -1]);
      this.speed = setSpeed();
      this.boundaryTest = this.direction > 0 ? offRight : offLeft;
      this.image = params.image;
      this.createSprite();
      this.purlinCursor = random(10000);
    }
    createSprite() {
      if (this.sprite != null) this.sprite.remove();
      this.sprite = createGraphics(100,100);
      if (this.DEBUG) {
        this.sprite.stroke('red');
        this.sprite.strokeWeight(2);
        this.sprite.noFill();
        this.sprite.rectMode(CORNERS);
        this.sprite.rect(1,1,98,98);
      }
      this.sprite.imageMode(CENTER);
      this.sprite.applyMatrix(
        this.direction, 0,
        0, 1,
        this.sprite.width/2, this.sprite.height/2);
      this.sprite.image(this.image,0,0);
    }
    draw() {
      push();
      imageMode(CENTER);
      image(this.sprite, this.x, this.y, this.sprite.width, this.sprite.height);
      pop();
    }
    animate() {
      this.x = this.x + this.speed * this.direction;
      this.y = noise(this.purlinCursor += purlinDelta) * (windowHeight-this.sprite.height)/2 + windowHeight/2;
      this.boundaryTest(this);
      this.speed -= friction * 1/this.speed;
      if (this.speed < 0.5) this.speed = setSpeed();
    }
  }
  sprites = { Person: Person };
})();
