import Player from "./player.js";
import MouseControl from "./mouseControl.js";
import Obstacle from "./obstacle.js";

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.player = new Player(this);
    this.mouse = new MouseControl(this.width * 0.5, this.height * 0.5, false);
    this.numberOfObstacles = 5;
    this.obstacles = [];

    this.canvas.addEventListener("mousedown", (e) => {
      //   console.log("mousedown start", this.mouse);
      this.mouse.update(e.offsetX, e.offsetY, true);
      //   console.log("mousedown end", this.mouse);
    });

    this.canvas.addEventListener("mouseup", (e) => {
      //   console.log("mouseup start", this.mouse);
      this.mouse.update(e.offsetX, e.offsetY, false);
      //   console.log("mouseup end", this.mouse);
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (this.mouse.pressed) {
        //   console.log("mouseup start", this.mouse);
        this.mouse.update(e.offsetX, e.offsetY, true);
        //   console.log("mouseup end", this.mouse);
      }
    });
    this.init();
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

  get numberOfObstacles() {
    return this._numberOfObstacles;
  }
  get obstacles() {
    return this._obstacles;
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

  set numberOfObstacles(numberOfObstacles) {
    this._numberOfObstacles = numberOfObstacles;
  }
  set obstacles(obstacle) {
    console.log(obstacle);
    if (this.obstacles && this.obstacles.length > 0) {
      this.obstacles.push(mouse);
    } else {
      this._obstacles = obstacle;
      console.log(this.obstacles);
    }
  }

  render(context) {
    // console.log(context);
    this.player.draw(context);
    this.player.update();
    this.obstacles.forEach((obstacle) => obstacle.draw(context));
  }

  init() {
    for (let i = 0; i < this.numberOfObstacles; i++) {
      const obstacle = new Obstacle(this);
      this.obstacles.push(obstacle);
    }
    console.log(this);
  }
}
