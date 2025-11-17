function setup() {
  let ws=createCanvas(200, 200);
  ws.parent("Mysketch");
  noLoop();
}

function draw() {
  background('#F5E6CC'); // light tan background

  // Plate or board
  fill('#D9C3A1');
  noStroke();
  rect(30, 130, 140, 40, 10);

  // Steak base
  fill('#8B0000'); // dark red meat tone
  stroke('#5A0000');
  strokeWeight(1.5);
  ellipse(100, 115, 110, 60);

  // Fat marbling (white streaks)
  stroke('white');
  strokeWeight(1);
  line(75, 110, 125, 115);
  line(80, 120, 130, 125);
  line(85, 115, 120, 120);

  // Grill marks
  stroke('#3B0B0B');
  strokeWeight(1);
  line(70, 105, 130, 125);
  line(75, 115, 135, 135);

  // Shine highlight
  noStroke();
  fill(255, 90);
  ellipse(100, 110, 35, 15);

  // Seared edge border
  noFill();
  stroke('#A0522D');
  strokeWeight(3);
  ellipse(100, 115, 110, 60);

  // Garnish (green herb)
  noStroke();
  fill('forestgreen');
  ellipse(140, 90, 12, 6);
  ellipse(145, 95, 12, 6);

  // Title
  noStroke();
  fill(60);
  textSize(12);
  textAlign(CENTER);
  text('Wagyu Steak', width / 2, 25);
}
