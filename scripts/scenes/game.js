class Game {
  constructor() {
    this.indice = 0;
    this.map = [
      {
        enemy: 0,
        speed: 10
      },
      {
        enemy: 1,
        speed: 30
      },
      {
        enemy: 1,
        speed: 15
      },
      {
        enemy: 2,
        speed: 40
      },
    ];
  }

  setup() {
    scenario = new Scenario(sceneryImage, 3);
    punctuation = new Punctuation();
    life = new Life(3, 3);

    personage = new Personage(personageMatrix, personageImage, 0, 30, 110, 135, 220, 270);

    const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 30, 52, 52, 104, 104, 10);
    const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10);
    const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width, 0, 200, 200, 400, 400, 10);

    enemies.push(enemy);
    enemies.push(bigEnemy);
    enemies.push(flyingEnemy);
  }

  keyPressed(key){
    if (key === 'ArrowUp') {
      personage.jump();
      jumpSound.play();
    }
  }

  draw(){
  scenario.display();
  scenario.move();

  life.draw();

  punctuation.display();
  punctuation.addPoints();

  personage.display();
  personage.applyGravity();
  
  const currentLine = this.map[this.indice];
  const enemy = enemies[currentLine.enemy];
  const visibleEnemy = enemy.x < -enemy.personageWidth;

  enemy.speed = currentLine.speed;

  enemy.display();
  enemy.move();


  if(visibleEnemy) {
    this.indice++;
    enemy.appear();
    if(this.indice > this.map.length - 1){
      this.indice = 0;
    }
    
  }

    if (personage.colliding(enemy)) {
      life.loseLife();
      personage.stayInvincible();
      if (life.lives === 0) {
        image(gameOverImage, width/2 - 200, height/3);
        noLoop();
        soundtrack.stop();        
      }
      
      
      
      
    }
  }
}