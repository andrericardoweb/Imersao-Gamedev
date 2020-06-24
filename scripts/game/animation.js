class Animation {
  constructor(matrix, image, x, personageWidth, personageHeight, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.image = image;
    this.personageWidth = personageWidth;
    this.personageHeight = personageHeight;
    this.x = x;
    this.y = height - this.personageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    
    this.currentFrame = 0;
  }

  display() {
    image(
      this.image, 
      this.x, this.y,
      this.personageWidth, this.personageHeight,
      this.matrix[this.currentFrame][0],
      this.matrix[this.currentFrame][1],
      this.spriteWidth, this.spriteHeight
    );

    this.animation();
  }

  animation() {
    this.currentFrame++;

    if(this.currentFrame >=this.matrix.length -1){
      this.currentFrame = 0;
    }
  }

    
}