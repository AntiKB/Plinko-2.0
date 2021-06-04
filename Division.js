class Division {
    constructor(x,y,width,height) {
      var Options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,Options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var Position =this.body.position;
      rectMode(CENTER);
      fill("BLUE");
      rect(Position.x,Position.y,this.width,this.height);
    }
};