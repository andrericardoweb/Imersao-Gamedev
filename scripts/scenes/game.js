class Game {
  constructor() {
    this.currentEnemy = 0
  }

  setup() {
    scenario = new Scenario(sceneryImage, 3);
    punctuation = new Punctuation();

    personage = new Personage(personageMatrix, personageImage, 0, 30, 110, 135, 220, 270);

    const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10, 100);
    const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width, 0, 200, 200, 400, 400, 10, 100);

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

  punctuation.display();
  punctuation.addPoints();

  personage.display();
  personage.applyGravity();

  const enemy = enemies[this.currentEnemy];
  const visibleEnemy = enemy.x < -enemy.personageWidth;

  enemy.display();
  enemy.move();

  if(visibleEnemy) {
    this.currentEnemy++;
    if(this.currentEnemy > 2){
      this.currentEnemy = 0;
    }
      enemy.speed = parseInt(random(10,30));
  }

    if (personage.colliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      noLoop();
      soundtrack.stop();
    }
  }
}