function preload() {
  homeScreenImage = loadImage('images/assets/home-screen.png');
  homeScreenFont = loadFont('images/assets/home-screen-font.otf');

  sceneryImage = loadImage('images/scenario/forest.png');
  gameOverImage = loadImage('images/assets/game-over.png');

  personageImage = loadImage('images/personage/running-witch.png');

  enemyImage = loadImage('images/enemy/drop.png');
  bigEnemyImage = loadImage('images/enemy/troll.png');
  flyingEnemyImage = loadImage('images/enemy/flying-drop.png');
  lifeImage = loadImage('images/assets/heart.png');
  ribbon = loadJSON('ribbon/ribbon.json');

  soundtrack = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
}