class Personage extends Animation{

  constructor(matrix, image, x, personageWidth, personageHeight, spriteWidth, spriteHeight) {
    super(matrix, image, x, personageWidth, personageHeight, spriteWidth, spriteHeight)
    this.image = image;
    
    this.currentFrame = 0;
  }

}