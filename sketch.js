var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor="white";

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="white"
  
 speed=random(23,321);
 weight=random(30,52);
 thickness=random(22,83);
 
}

function draw() {
  background(0);  
  bullet.velocityX=speed;
  console.log(speed);

 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
 
  bullet.velocityX=0;
   
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness 
  
   if(damage>10){
    bullet.shapeColor=color(255,0,0);
   }
   if(damage<10){
    bullet.shapeColor=color(0,255,0);
   }
 }

 
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if (bulletRightEdge>=bulletLeftEdge){
    return true;
  }
  else {
    return false;
  }
}