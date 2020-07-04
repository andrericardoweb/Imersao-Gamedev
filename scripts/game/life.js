class Life {
  constructor(maxLife, initialLife) {
    this.maxLife = maxLife;
    this.initialLife = initialLife;
    this.lives = this.initialLife;

    this.width = 25;
    this.height = 25;
    this.xInitial = 20;
    this.y = 20;
  }

  draw() {
    for(let i = 0; i < this.lives; i++) {
      const margin = i * 10;
      const position =  this.xInitial * (i + 1);

      image(lifeImage, position + margin, this.y, this.width, this.height);
    }

  }
    
  winLife() {
    if(this.lives <= this.maxLife){
      this.lives++;
    }
  }
    
  loseLife() {
    this.lives--;
  }
 
  
}