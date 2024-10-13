import Game from "./logic/game.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  ctx.fillStyle = "white";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";

  const game = new Game(canvas);
  console.log(game);
//   game.render(ctx);
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    game.render(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
