class Personage extends Animation{

  constructor(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight) {
    super(matrix, image, x, yVariation, personageWidth, personageHeight, spriteWidth, spriteHeight);

    this.yVariation = yVariation;
    this.yInitial = height - this.personageHeight - this.yVariation;
    this.y = this.yInitial;
    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpSpeed = - 30;
  }

  applyGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.y > this.yInitial) {
      this.y = this.yInitial;
    }
  }

  colliding() {
    const precision = .7;
    const collision = collideRectRect(
      this.x, 
      this.y, 
      this.personageWidth * precision, 
      this.personageHeight * precision,
      enemy.x,
      enemy.y, 
      enemy.personageWidth * precision,
      enemy.personageHeight * precision,
    );
    
    return collision;
  }


}