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

  get canvas() {
    return this._canvas;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get player() {
    return this._player;
  }
  get mouse() {
    return this._mouse;
  }

  set canvas(canvas) {
    this._canvas = canvas;
  }
  set width(width) {
    this._width = width;
  }
  set height(height) {
    this._height = height;
  }
  set player(player) {
    this._player = player;
  }
  set mouse(mouse) {
    this._mouse = mouse;
  }

  render(context) {
    console.log(context);
    this.player.draw(context);
  }
}
