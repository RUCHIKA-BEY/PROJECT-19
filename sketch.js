var car1,wall1;
var car2,wall2;
var car3,wall3;
var car4,wall4;

var speed,weight;

function setup() {
  createCanvas(1600,600);

  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50,140,50, 50);
  car1.velocityX=speed;

  wall1=createSprite(1500,140,60,height/6);
  wall1.shapeColor=color(80,80,80);

  car2=createSprite(50,260,50, 50);
  car2.velocityX=speed;

  wall2=createSprite(1500,260,60,height/6);
  wall2.shapeColor=color(80,80,80);

  car3=createSprite(50,380,50, 50);
  car3.velocityX=speed;

  wall3=createSprite(1500,380,60,height/6);
  wall3.shapeColor=color(80,80,80);

  car4=createSprite(50,500,50, 50);
  car4.velocityX=speed;

  wall4=createSprite(1500,500,60,height/6);
  wall4.shapeColor=color(80,80,80);
  
  
}

function draw() {
 background(0,0,0); 

 if(car1.x-wall1.x>car1.width/2+wall1.width/2){

  car1.velocityX=0;
  car2.velocityX=0;
  car3.velocityX=0;
  car4.velocityX=0;

  var deformation=0.5*weight*speed*speed/22500
  if (deformation<100){
    car1.shapeColor=color(0,255,0);
    car2.shapeColor=color(0,255,0);
    car3.shapeColor=color(0,255,0);
    car4.shapeColor=color(0,255,0);
  }
  if(deformation<180 && deformation>100){
    car1.shapeColor=color(230,230,0);
    car2.shapeColor=color(230,230,0);
    car3.shapeColor=color(230,230,0);
    car4.shapeColor=color(230,230,0);
  }
  if(deformation>180){
    car1.shapeColor=color(255,0,0);
    car2.shapeColor=color(255,0,0);
    car3.shapeColor=color(255,0,0);
    car4.shapeColor=color(255,0,0);
  }
 }

 

  drawSprites();
}