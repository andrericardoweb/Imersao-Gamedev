

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  homeScreen = new HomeScreen();
  game.setup();
  scenes = {
    game,
    homeScreen
  };
  managerButton = new ManagerButton('Start', width/2, height/2);
  frameRate(40);
  soundtrack.loop();
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}