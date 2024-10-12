import Player from "./player.js";

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.player = new Player(this);
  }

  render(context) {
    console.log(context);
    this.player.draw(context);
  }
}
