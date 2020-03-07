var mercury,venus,mars,earth,jupiter,saturn,uranus,neptune;
var merimg,veimg,eaimg,maimg,juimg,saimg,urimg,neimg;

var sun, sunimg;
var angle = 0;
var anglespeed = 0.2;
var sunRadius;
function preload(){
  sunimg = loadImage("sun2.png");
  merimg = loadImage("mercury.png");
  veimg = loadImage("venus.png");
  eaimg = loadImage("earth.png");
  maimg = loadImage("mars.png");
  juimg = loadImage("jupiter.png");
  saimg = loadImage("saturn.png");
  urimg = loadImage("uranus.png");
  neimg = loadImage("neptune.png");
}

function setup() {
  createCanvas(1500,1000);
  sun = createSprite(0,0);
  sun.addImage(sunimg);
  sun.scale = 0.15;
  sun.setCollider("circle",0,0,450);
  sun.debug = true;

  mercury = createSprite(180,50);
  mercury.addImage(merimg);
  mercury.scale = 0.05;
  mercury.setCollider("circle",0,0,480);
  mercury.debug = true;

  venus = createSprite(280,150);
  venus.addImage(veimg);
  venus.scale = 0.15;
  venus.setCollider("circle",0,0,250);
  venus.debug = true;

  earth = createSprite(180,280);
  earth.addImage(eaimg);
  earth.scale = 0.05;
  earth.setCollider("circle",0,0,780);
  earth.debug = true;

  mars = createSprite(180,380);
  mars.addImage(maimg);
  mars.scale = 0.10;
  mars.setCollider("circle",0,0,330);
  mars.debug = true;

  jupiter = createSprite(-450,-150);
  jupiter.addImage(juimg);
  jupiter.scale = 0.50;
  jupiter.setCollider("circle",0,0,160);
  jupiter.debug = true;
  
  uranus = createSprite(380,-380);
  uranus.addImage(urimg);
  uranus.scale = 0.070;
  uranus.setCollider("circle",0,0,630);
  uranus.debug = true;

  saturn = createSprite(480,-290);
  saturn.addImage(saimg);
  saturn.scale = 0.250;
  saturn.setCollider("circle",0,0,330);
  saturn.debug = true;

  neptune = createSprite(-450,-450);
  neptune.addImage(maimg);
  neptune.scale = 0.150;
  neptune.setCollider("circle",0,0,330);
  neptune.debug = true;
    
}

function draw() {
  background(0); 
  angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if(sun.isTouching(mercury)){
      mercury.destroy();
    }
    if(sun.isTouching(venus)){
      venus.destroy();
    }
    if(sun.isTouching(earth)){
      earth.destroy();
    }
    if(sun.isTouching(mars)){
      mars.destroy();
    }
    
    if(sun.isTouching(jupiter)){
      jupiter.destroy();
    }
    
    if(sun.isTouching(saturn)){
      saturn.destroy();
    }
    if(sun.isTouching(uranus)){
      uranus.destroy();
    }
    if(sun.isTouching(neptune)){
      neptune.destroy();
    }
    
     // /*
    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.001;
    }
    //  */
    drawSprites();
}