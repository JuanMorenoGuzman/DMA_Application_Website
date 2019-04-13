
//let bg;
//let bg2;

function setup() {

  createCanvas(400,400);
  angleMode(DEGREES);

  //bg = loadImage('images/school.jpg');
  //bg2 = loadImage('images/night.jpg');

}

function draw() {
background(255);
translate(200,200);
rotate(-90);
var s = second();
var m = minute();
var h = hour();
let mc = map(s, 0,59, 0, 100);

var past12;
var hour12;

if ( h == 12) {
 hour12 = h;
 past12 = "PM";
 console.log("Noon");
} else if ( h == 0 ) {
 hour12 = 12;
 past12 = "AM";
} else  {

if (h > 11) {

   hour12 = h-12;
   past12 = "PM";
  console.log("afternoon");
} else {
  hour12 = h;
  past12 = "AM";
}

}

if ( past12 == "PM") {

  background(14, 160, 107);

} else {

  background(52, 21, 53);

}


let ms = map(s,0,60,0,360);

strokeWeight(10);
//stroke(100,100,255);
//noFill();

colorMode(HSB, 255);
push();
fill(mc, 255, 255);
stroke(117, 243, 255);
rotate(ms);
let secondBar = map(s,0,60,0,360);
arc(0,0,300,300,0,secondBar);
pop();


colorMode(RGB, 255);
push();
fill(255, 41, 38);
stroke(180, 43, 255);
let minuteBar = map(m,0,60,0,360);
arc(0,0,280,280,0, minuteBar);
pop();

colorMode(RGB, 255);
push();
fill(221, 252, 255);
stroke(50, 51, 46);
let hourBar = map(h % 12,0,12,0,360);
arc(0,0,260,260,0, hourBar);
pop();


}
