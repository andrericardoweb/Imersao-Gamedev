class Enemy extends Animation {
  constructor(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight, speed) {
    super(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight)

    this.speed = speed;
    this.x = width;
  }

  move() {
    this.x = this.x - this.speed;
  }
  
  appear() {
    this.x = width;
  }
}