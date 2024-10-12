import Game from "./logic/game.js";

window.addEventListener("load",function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2D");
    canvas.width=1280;
    canvas.height=720;

  
    const game = new Game(canvas);
    console.log(game)
})