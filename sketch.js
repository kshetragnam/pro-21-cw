var fixedRect, movingRect;
var gO1, gO2, gO3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gO1 = createSprite(100,100,50,50);
  gO1.shapeColor = "green";

  gO2 = createSprite(200,100,50,50);
  gO2.shapeColor = "green";

  gO3 = createSprite(300,100,50,50);
  gO3.shapeColor = "green";

  go4 = createSprite(400,100,50,50);
  go4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if ( isTouching(gO1,movingRect) ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}

function isTouching (o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true;
}
else {
  return false;
}
}