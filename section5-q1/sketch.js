// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(255);
  balloon("I love keyakizaka46 ",200,mouseY);
  text("Suzuka Tada",20,20);
}

function balloon(t,x,y){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  fill(50,205,50);
  noStroke();
  ellipse(x,y, w + p * 2, h + p * 2);
  triangle(400,y+h,200,y+h+50,310,y+10);
  fill(153,50,204);
  text(t, 150, y+h);
  pop();
}
