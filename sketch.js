var hr, hrAngle;
var minut,minAngle
var sec, secAngle;

var cx;
var cy;
function setup() {
  createCanvas(900, 900);
  stroke(255);
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.53;
  minutesRadius = radius * 0.45;
  hoursRadius = radius * 0.25;
  clockDiameter = radius * 1.7;
  
  cx=width/2;
  cy=height/2;

  startPoint = (clockDiameter/2 + cos(radians(0)) * secondsRadius );

}

  

function draw() {
  background(0);  
  //angleMode(DEGREES);
  let secAngle = map(second(), 0, 60, 270, 630 )  ;
  let minAngle = map(minute()+ norm(second(), 0, 60) , 0, 60, 270, 630 ) ;
  let hrAngle = map(hour() + norm(minute(), 0, 60), 0, 12, 270, 630 ) ;
  angleMode(DEGREES);

  stroke("red");
  strokeWeight(4);
 

  line(clockDiameter/2, clockDiameter/2, clockDiameter/2 + cos(secAngle) * secondsRadius, clockDiameter/2 + sin(secAngle) * secondsRadius);
  noFill();
  strokeWeight(7);
  arc(clockDiameter/2, clockDiameter/2, 740, 740,startPoint, secAngle );

  stroke("lime");
  strokeWeight(4);
  line(clockDiameter/2, clockDiameter/2, clockDiameter/2 + cos(minAngle) * minutesRadius, clockDiameter/2 + sin(minAngle) * minutesRadius);
  
  noFill();
  strokeWeight(7);
  arc(clockDiameter/2, clockDiameter/2, 720, 720, startPoint, minAngle);
  
  stroke("blue");
  strokeWeight(5);
  
  line(clockDiameter/2, clockDiameter/2, clockDiameter/2 + cos(hrAngle) * hoursRadius, clockDiameter/2 + sin(hrAngle) * hoursRadius);
  noFill();
  strokeWeight(7);
  arc(clockDiameter/2, clockDiameter/2, 700, 700, startPoint, hrAngle);
  
  translate(0,0);

}  
