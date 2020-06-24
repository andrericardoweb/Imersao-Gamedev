
let sceneryImage;
let personageImage;
let scenario;
let soundtrack;
let personage;

function preload() {
  sceneryImage = loadImage('images/scenario/forest.png');
  personageImage = loadImage('images/personage/running-witch.png');
  personage = new Personage(personageImage);
  soundtrack = loadSound('sounds/soundtrack.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneryImage, 3);
  //soundtrack.loop();
  frameRate(40);
}

function draw() {
  scenario.display();
  scenario.move();
  personage.display();
}