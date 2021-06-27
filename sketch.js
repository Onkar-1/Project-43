var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    
}

function draw(){
    background(0, 0, 0);

    translate(200,200);
    
    h = hour();
    min = minute();
    sec = second();

    push();
    stroke(0, 100, 102);
    strokeWeight(2);
    text("|", 96, 140);
    text("|", 96, 160);
    text("|", 96, 180);
    pop();

    text("Hour:" + h, 100, 140);
    text("Minute:" + min, 100, 160);
    text("Second:" + sec, 100, 180);

    rotate(-90);

    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360);
    hAngle = map(h % 12,0,12,0,360);
    
    push();
    rotate(secAngle); 
    stroke(77, 25, 77);
    strokeWeight(7);
    line(0,0,150,0);
    pop();
    
    push();
    rotate(minAngle);
    stroke(33, 47, 69);
    strokeWeight(7);
    line(0,0,140,0);
    pop();

    push();
    rotate(hAngle);
    stroke(0, 100, 102);
    strokeWeight(7);
    line(0,0,130,0);
    pop();

    stroke(255,0,255);
    point(0,0);

    strokeWeight(7);
    noFill();

    stroke(77, 25, 77);
    arc(0,0,300,300,0,secAngle);

    stroke(33, 47, 69);
    arc(0,0,280,280,0,minAngle);
    
    stroke(0, 100, 102);
    arc(0,0,260,260,0,hAngle);
}


