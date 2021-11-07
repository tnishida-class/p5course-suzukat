
let x, y, vx, vy;
const g = 1;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;

}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  if(keyIsDown(RIGHT_ARROW)){ x += vx;}
  if(keyIsDown(LEFT_ARROW)){x -= vx;}
  if(keyIsDown(" ".charCodeAt(0)))
  {
　  y += vy;
   vy += g;
   vy = constrain(vy, -vyMax, vyMax);
　 if(y < 0 || y > height){ vy = -1 * vy; }
 　y = constrain(y, 0, height );
}

  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
