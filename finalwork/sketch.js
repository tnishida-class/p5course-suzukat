// 最終課題を制作しよう

let x, y,vx,vy,cx,cy,vcy,i;
const g = 0.1;
const vcyMax = 3;


// 画像たち
let img;
function preload() {
  img = loadImage('31248.png');
  img2 = loadImage('cheese.png');
  img3 = loadImage('yummy-removebg-preview.png');
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height / 2;
  cx = random(0,600);
  cy = 0;
  vx=5;
  vcy=8;

  cheesetouching() ;
}

function draw(){
background(175,238,238);

textSize(20);
fill(0,0,0);
text("←　→　でチーズを左右に動かしてネズミに食べさせよう🧀",20,50);


// ネズミが動く
image(img, x,height-150,60,60);
x +=vx;
if(x>width-70||x<0){vx= -1*vx;}

// ネズミガイド
stroke(169,169,169);
for (let i=0;i<6;i++){line((i*10)+x,0,(i*10)+x,height-140);
}

// チーズが動く
image(img2,cx,cy,30,30);
cy += vcy;
vcy = constrain(vcy + g,-vcyMax, vcyMax );
if(keyIsDown(RIGHT_ARROW)){cx +=5;}
if(keyIsDown(LEFT_ARROW)) {cx -=5;}
if(cy>height){cy=0;cx=random(0,windowWidth-100);}


//　くっつく
if(cheesetouching()){
  image(img3,windowWidth/5,windowHeight/5,windowWidth*3/5,windowHeight*3/5);
  cx=x;
　cy=height-150;

}

}
function cheesetouching(){
  // 当たり判定
  if(cx<x+25 && cx>x-10 && cy<windowHeight-110 && cy>windowHeight-150){
    // mauseの範囲
    return true;
  }
  else{
    return false;}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
