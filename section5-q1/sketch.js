// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46 ");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  fill(50,205,50);
  noStroke();
  ellipse(200,200, w + p * 2, h + p * 2);
  fill(153,50,204);
  text(t, p+50, h + p+80);
}
function draw(){
  fill(50,205,50);
  noStroke();
  triangle(250,200,320,200,300,320);
}
