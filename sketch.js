
let sceneryImage;
let personageImage;
let enemyImage;
let bigEnemyImage;
let flyingEnemyImage;

let scenario;
let soundtrack;
let jumpSound;

let personage;
let enemy;
let bigEnemy;

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

function preload() {
  sceneryImage = loadImage('images/scenario/forest.png');
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
  personage = new Personage(personageMatrix, personageImage, 0, 30, 110,135, 220, 270);
  enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 30, 52, 52, 104, 104, 8, 100);
  bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width, 0, 200, 200, 400, 400, 8, 500);
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

  personage.display();
  personage.applyGravity();

  enemy.display();
  enemy.move();

  bigEnemy.display();
  bigEnemy.move();

  if (personage.colliding(enemy)) {
    noLoop();
    soundtrack.stop();
  }
}