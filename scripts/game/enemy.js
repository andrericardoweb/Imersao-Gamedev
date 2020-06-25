class Enemy extends Animation {
  constructor(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight, speed, delay) {
    super(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight)

    this.speed = speed;
    this.delay = delay;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.personageWidth - 200) {
      this.x = width;
    }
  }

}