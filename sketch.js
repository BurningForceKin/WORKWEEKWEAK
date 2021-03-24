// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;

var canvas;
var engine;
var world;
var boxes = [];
var mouse;
var mConstraint;
var w = 200;
var h = 400;
var ground;
var r;
function setup() {

  // physics shit
  frameRate(24);
   canvas = createCanvas(w, windowHeight);
    canvas.touchStarted();
      let newCanvasX = (windowWidth -200)/2;
  canvas.position(newCanvasX, 0);

  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200, windowHeight, 400, 60, { isStatic: true });
    Engine.run(engine); 
  World.add(world, ground);
  canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  var options = {mouse : canvasMouse};
  mConstraint  = MouseConstraint.create(engine, options);
  
  World.add(world, mConstraint);

}

function keyPressed(){
            boxes.push(new Box(random(50, 150), 10, 40, 20, r));
}

function touchStarted(){
            boxes.push(new Box(random(50, 150), 10, 40, 20, r));
}

function draw() {
  background(0);
  var start = 0;
  var n = int(random(0,4));
     if(n == 0){
    r = 'WEAK';
   }
      if(n == 1){
      r = 'WEEK';
      }
      if(n == 2){
    r = 'WORK';
      }
     if(n == 3){
    r = 'WANT';
   }
 
    for (let i = 0; i < boxes.length; i++){
          boxes[i].show();
      if(boxes.off == true){
        boxes[i].verwijder();
        boxes.splice(i, 1);
        i--;
      }
    }
          // boxes.push(new Box(random(50, 150), 10, 40, 20, r));
}


