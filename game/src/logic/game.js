import Player from "./player.js";
import MouseControl from "./mouseControl.js";

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.player = new Player(this);
    this.mouse = new MouseControl(this.width * 0.5, this.height * 0.5, false);

    this.canvas.addEventListener("mousedown", (e) => {
      console.log("mousedown start", this.mouse);
      this.mouse.update(e.offsetX, e.offsetY, true);
      console.log("mousedown end", this.mouse);
    });

    this.canvas.addEventListener("mouseup", (e) => {
      console.log("mouseup start", this.mouse);
      this.mouse.update(e.offsetX, e.offsetY, false);
      console.log("mouseup end", this.mouse);
    });

    this.canvas.addEventListener("mousemove", (e) => {
      console.log("mouseup start", this.mouse);
      this.mouse.update(e.offsetX, e.offsetY, false);
      console.log("mouseup end", this.mouse);
    });
  }

  render(context) {
    console.log(context);
    this.player.draw(context);
  }
}
