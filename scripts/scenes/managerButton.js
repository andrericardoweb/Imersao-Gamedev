class ManagerButton {
  constructor(textButton, x, y){
    this.textButton = textButton;
    this.x = x;
    this.y = y;
    this.button = createButton(this.textButton);
    this.button.mousePressed(() => this._alterScene());
    this.button.addClass('home-screen-button');
  }

  draw(){
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _alterScene() {
    this.button.remove();
    currentScene = 'game';
  }
}