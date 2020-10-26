var gameObj1, gameObj2, gameObj3, gameObj4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);                             
  movingRect = createSprite(400,200,80,30);

  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor = "green";

  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor = "green";

  gameObj3=createSprite(300,100,50,50);
  gameObj3.shapeColor = "green";

  gameObj4=createSprite(400,100,50,50);
  gameObj4.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  console.log(movingRect.x-fixedRect.x);
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;


if(isTouching(movingRect, gameObj3)) {
  movingRect.shapeColor = "blue";
  gameObj3.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameObj3.shapeColor = "green";
}
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x-object2.x < object2.width/2+object1.width/2 && 
    object2.x-object1.x < object2.width/2+object1.width/2 &&
    object1.y-object2.y < object2.height/2+object1.height/2 && 
    object2.y-object1.y < object2.height/2+object1.height/2){
    
      return true;
  }
  else{
    return false;
  }
}