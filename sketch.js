
let canvas;
let hand;
let button;
let glassY = 0;
let handY = 210;
let thinking = false;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-container"); 
  hand.resize(100, 100);
  addGUI();
}
function preload() {
  hand = loadImage('assets/images/hand.png');
}

function addGUI() {
  button = createButton("How?");
  button.addClass("button");
  button.parent("gui-container");
  // button.position(10,410);
  button.mousePressed(handleButtonPress);
}

function handleButtonPress() {
 if (!thinking) {
  thinking = true;
  glassY = random (-15,-8);
  handY = random (180,210);
  console.log("Pressed");
  button.html("Thinking");

  button.addClass("inactive");
 }
  

}

function moveglasses() {
  handY ++;
  glassY++;
}

function draw() {
  //background(220,234,150,100);
  background(255,250,200);
  drawMy();
  push ();
  translate (0, glassY);
  myGlasses();
  pop ();
  image(hand, 0, handY);

  if (handY < 210 || glassY < 0) {
    moveglasses();
  }
  else {
    thinking = false;
    button.html("Why?");
    button.removeClass("inactive");
  }
}
function drawMy () {
//my head;
stroke(232,154,98);
strokeWeight(3);
noFill();

angleMode(DEGREES);
rotate(20);
ellipse(230,110,220,258);

angleMode(DEGREES);
rotate(-6);
noStroke();
fill(206,162,162);
ellipse(220,133,210,252);

//re-rotate;
angleMode(DEGREES);
rotate(-14);


myEyes();
// push ();
// translate (0,glassY);
// myGlasses();
// pop ();

//my dark circle;
noFill();
stroke(0,255,120,80);
strokeWeight(7);
curve(100,130,110,180,130,175,150,135);
//X+110;
curve(210,115,220,175,240,180,260,150);

//MY MOUSE;
fill(255,180,100,100);
noStroke();
ellipse(170,260,50,25);


fill(255,128,0,200);
noStroke();
circle(160,260,20,20);
circle(175,258,20,20);


 //MY noise;
  fill(190,130,80,100);
  angleMode(DEGREES);
  rotate(25);
  noStroke();
  ellipse(220,130,15,30);
  rotate(-50);
  ellipse(90,275,15,30);
  
 //re-rotate;
  angleMode(DEGREES);
  rotate(25);

 //my hair;
 noFill();
 stroke(255);
 strokeWeight(3);

 bezier(0,100,300,0,200,200,400,100);
 bezier(0,350,260,0,300,400,400,0);
 bezier(150,0,50,200,380,0,180,400);
 bezier(0,280,400,300,0,320,400,400);
 bezier(300,0,400,300,100,120,200,400);
 bezier(300,0,400,300,100,120,200,400);
 bezier(50,50,150,45,150,380,150,380);
 bezier(150,50,250,60,50,380,2000,200);
}
function myEyes() {
//eyebrows;
noFill();
stroke(0,100);
strokeWeight(4);
beginShape();
vertex(90,150);
bezierVertex(100,145,120,145,140,160);
endShape();

beginShape();
vertex(200,160);
bezierVertex(210,145,235,145,255,150);
endShape();
// my eyes-LEFT;
noFill();
stroke(0);
strokeWeight(2);
beginShape();
vertex(90,170);
bezierVertex(100,165,130,165,140,170);
endShape();

beginShape();
vertex(100,170);
bezierVertex(110,170,130,165,140,170);
endShape();

beginShape();
vertex(100,170);
bezierVertex(110,170,125,170,130,175);
endShape();

noFill();
stroke(0);
strokeWeight(3);
ellipse(120,170,10,5);

  // my eyes-RIGHT;,X+110;
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(200,170);
  bezierVertex(210,165,240,165,250,170);
  endShape();

  beginShape();
  vertex(210,170);
  bezierVertex(220,170,240,165,250,170);
  endShape();

  beginShape();
  vertex(210,170);
  bezierVertex(220,170,235,170,220,175);
  endShape();
 
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(230,170,10,5);
}
function myGlasses() {
  //shade of glassed;
fill(240,140,40,80);
noStroke();
beginShape();
vertex(86,230);
bezierVertex(60, 205, 240, 190, 270, 235);
bezierVertex(220,215,100, 215,86,230);
endShape();  

fill(255,100);
noStroke();
beginShape();
vertex(86,226);
bezierVertex(60, 200, 240, 185, 270, 230);
bezierVertex(220,210,100, 210,86,226);
endShape();  
 
//my glass-orange;
  noFill();
  strokeWeight(3);
  stroke(255,130,10,200);
  quad(75,162,144,160,135,222,86,216);
  quad(196,160,260,154,257,210,206,216);

  

  //my glass-purple1;
  fill(160,40,233,100);
  noStroke();
  quad(75,152,140,150,135,212,90,214);
  quad(205,150,260,150,260,200,206,206);

  stroke(160,40,233,100);
  strokeWeight(5);
  line(140,165,205,165);

  //my glass-purple2;
  fill(200,160,230,180);
  noStroke();
  quad(85,172,150,170,145,232,100,234);
  quad(210,170,270,170,270,220,216,226);
 
  stroke(200,160,230,180);
  strokeWeight(5);
  line(154,180,210,180);

  //my glass-white;
  //should let X1,X2,X3,X4,Y1,Y2,Y3,Y4;
  noFill();
  strokeWeight(6);
  strokeJoin(ROUND);
  stroke(255,255,255,150);
  quad(55,152,154,150,145,230,80,226);
  quad(185,150,274,144,270,218,195,228);
  line(154,170,185,170);
}