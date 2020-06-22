
let sceneryImage;
let personageImage;
let scenario;

function preload() {
  sceneryImage = loadImage('images/scenario/forest.png');
  personageImage = loadImage('images/personage/running-witch.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneryImage, 3);
}

function draw() {
  scenario.display();
  scenario.move();
  image(personageImage, 0, height - 135, 110, 135, 0, 0, 220, 270);
}

class Scenario {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  display() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }

  move() {
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;

    if(this.x1 < -width) {
      this.x1 = width;
    }
    if(this.x2 < -width){
      this.x2 = width;
    }
  }
}