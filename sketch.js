var car ,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
 //createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = ("white");

  wall=createSprite(900,200,60,height/2);
  wall.shapeColor=("black");

}

function draw() {
  background(33,47,60);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180)
    {
      car.shapeColor = ("cyan");
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = ("green");
    }

    if(deformation<100)
    {
      car.shapeColor = ("red");
    }
  }
  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press ctrl+R to get different colours",200,200);
  
  

  drawSprites();
}