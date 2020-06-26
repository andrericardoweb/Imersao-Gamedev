class Enemy extends Animation {
  constructor(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight, speed, delay) {
    super(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight)

    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.personageWidth - this.delay) {
      this.x = width;
    }
  }

}