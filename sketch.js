function setup() {
  createCanvas(400, 400);
   background(225,225,0);
}

function mouseDragged() {
  let posX=mouseX;
  let posY=mouseY;
  point(posX,posY);
  strokeWeight(5);
  stroke('black');
 jump();
}
function jump(){
  console.log('Jumpy!!!!');
}