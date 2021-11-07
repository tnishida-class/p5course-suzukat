
let x, y, vx, vy;
const g = 1;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  // vx = 8;
  vy = 8;

}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  if(keyIsDown(RIGHT_ARROW)){ x +=5;}
  if(keyIsDown(LEFT_ARROW)){x -= 5;}
  if(y>=height-10&& keyIsDown(" ".charCodeAt(0))){vy=-20;}

　  y += vy;
   // vy += g;
   vy = constrain(vy+g, -vyMax, vyMax);
   if(y > height){ vy = 0; }
   x=constrain(x,0,width);
   y=constrain(y,0,height-10);

 // 　y = constrain(y, 0, height );

  //
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
