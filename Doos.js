var start = 0;

function Box(x, y, w, h, r) {

 this.body = Bodies.rectangle(x, y, w, h, r);
 this.body.restitution = 0.6;
 this.body.friction = 0.02;
  // this.body.collisionFilter.category = 32;
  // this.body.isSensor;
 this.w = w;
 this.h = h;
  this.r = r;
 World.add(world, this.body);
  
 this.off = function(){
    var pos = this.body.position;
    return(pos.y > height+100);  
  }
  
  this.verwijder = function(){
    World.remove(world, this.body);    
  }

 this.show = function(){
   var pos = this.body.position;
   var angle = this.body.angle;
    
   
   push();
   translate(pos.x, pos.y);
    rotate(angle);
   fill(255);
   textSize(20);
   textAlign(CENTER, CENTER);
   text(this.r, 0, 0);
   pop();
   start += 0.1;
 }

}
