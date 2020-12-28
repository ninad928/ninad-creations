var car,wall;
var speed,weight;

function setup() {
 createCanvas(2500,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(100,200,50,50);
  wall = createSprite(1300,200,60,height/2);
  car.velocityX = speed;
  car.shapeColor="black";
}

function draw() {
  background("purple"); 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * speed * weight * speed/22509;
    if(deformation>180){
      car.shapeColor="blue";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="red"
    }
    if(deformation<100){
      car.shapeColor="green"; 
     }
     }
    
    drawSprites();
}