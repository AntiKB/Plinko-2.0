class Plinko{
    constructor(x,y){
        var Options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        var radius = 10;
        this.body = Bodies.circle(x,y,radius,Options);
        this.radius = 10;
        this.radius = radius;
        this.image = loadImage("Sprites/CircleImage.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}