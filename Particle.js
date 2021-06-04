class Particle{
    constructor(x,y,radius){
        var Options = {
            'isStatic':false,
            'restitution':0.25,
            'friction':0.5,
            'density':1.25
        }
        this.body = Bodies.circle(x,y,radius,Options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2,this.radius*2);
        pop();
    }
}