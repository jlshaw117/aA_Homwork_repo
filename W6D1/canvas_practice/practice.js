document.addEventListener("DOMContentLoaded", function(){
  let canv = document.getElementById('mycanvas');
  canv.height = 500;
  canv.width = 500;
  let ctx = canv.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 2*Math.PI);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = 'orange';
  ctx.fill();
});
