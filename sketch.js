
let sceneryImage;
let personageImage;
let enemyImage;
let bigEnemyImage;
let flyingEnemyImage;
let gameOverImage;

let scenario;
let soundtrack;
let jumpSound;

let personage;
let enemy;
let bigEnemy;
let flyingEnemy;

let punctuation;
let currentEnemy = 0;

const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const personageMatrix = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const bigEnemyMatrix = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const flyingEnemyMatrix = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const enemies = [];

function preload() {
  sceneryImage = loadImage('images/scenario/forest.png');
  gameOverImage = loadImage('images/assets/game-over.png');

  personageImage = loadImage('images/personage/running-witch.png');

  enemyImage = loadImage('images/enemy/drop.png');
  bigEnemyImage = loadImage('images/enemy/troll.png');
  flyingEnemyImage = loadImage('images/enemy/flying-drop.png');

  soundtrack = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneryImage, 3);
  punctuation = new Punctuation();

  personage = new Personage(personageMatrix, personageImage, 0, 30, 110,135, 220, 270);
  
  const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 100);
  const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10, 100);
  const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width, 0, 200, 200, 400, 400, 10, 100);
  
  enemies.push(enemy);
  enemies.push(bigEnemy);
  enemies.push(flyingEnemy);

  frameRate(40);
  //soundtrack.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personage.jump();
    jumpSound.play();
  }
}

function draw() {
  scenario.display();
  scenario.move();

  punctuation.display();
  punctuation.addPoints();

  personage.display();
  personage.applyGravity();

  const enemy = enemies[currentEnemy];
  const visibleEnemy = enemy.x < -enemy.personageWidth;

  enemy.display();
  enemy.move();

  if(visibleEnemy) {
    currentEnemy++;
    if(currentEnemy > 2){
      currentEnemy = 0;
    }
  }

    if (personage.colliding(enemy)) {
      //image(gameOverImage, width/2 - 200, height/3);
      //noLoop();
      //soundtrack.stop();
    }
}