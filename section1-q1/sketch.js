// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);


  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);

  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

fill(blue);
noStroke();
  ellipse(300,100,99,99);
  fill(255);
    ellipse(293,93,81,81);
    fill(green);
    ellipse(292,92,75,75);
    fill(255);
      ellipse(291,95,70,70);
}
