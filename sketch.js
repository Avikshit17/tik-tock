var hours,minutes,seconds
var hourAngle,minuteAngle,secondAngle
function setup() {
  createCanvas(400,400);
  angleMode(CENTER)
}

function draw() {
  background(0,0,0);  
  translate(200,200)
  hours=hour()
  minutes=minute()
  seconds=second()

secondAngle=map(seconds,0,60,0,360)
minuteAngle=map(minutes,0,60,0,360)
hourAngle=map(hours%12,0,12,0,360)
push ()
rotate (secondAngle)
stroke ("white")
strokeWeight (5)
line(0,0,100,0)
pop()

push ()
rotate (minuteAngle)
stroke ("red")
strokeWeight (5)
line(0,0,75,0)
pop ()

push ()
rotate (hourAngle)
stroke ("yellow")
strokeWeight (5)
line (0,0,50,0)
pop ()
noFill ()
stroke ("white")
arc (0,0,300,300,0,secondAngle)

stroke("red")
arc(0,0,270,270,0,minuteAngle)

stroke ("yellow")
arc (0,0,240,240,0,hourAngle)
}