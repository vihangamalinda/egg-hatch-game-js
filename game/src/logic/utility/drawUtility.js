const drawHelper =(context,refObj)=>{
    context.beginPath();
    context.arc(
        refObj.collisionX,
        refObj.collisionY,
        refObj.collisionRadius,
      0,
      Math.PI * 2
    );
    context.save();
    context.globalAlpha = 0.5;
    context.fill();
    context.restore();
    context.stroke();
}

export default drawHelper; 