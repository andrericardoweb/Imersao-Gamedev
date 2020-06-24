class Enemy extends Animation {
  constructor(matrix, image, x, personageWidth, personageHeight, spriteWidth, spriteHeight) {
    super(matrix, image, x, personageWidth, personageHeight, spriteWidth, spriteHeight)

    this.speed = 8;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.personageWidth) {
      this.x = width;
    }
  }

}