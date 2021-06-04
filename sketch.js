const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var Division1;
var Division2;
var Division3;
var Division4;
var Division5;
var Division6;
var Division7;

var Score = 0;

var Particles = [];
var Plinkos = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  Division1 = new Division(10,700,20,160);
  Division2 = new Division(90,700,20,160);
  Division3 = new Division(170,700,20,160);
  Division4 = new Division(240,700,20,160);
  Division5 = new Division(310,700,20,160);
  Division6 = new Division(390,700,20,160);
  Division7 = new Division(470,700,20,160);

  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,75));
  }
  for(var i = 15;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,175));
  }
  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,275));
  }
  for(var i = 15;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,375));
  }
  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,475));
  }
}

function draw() {
  background("BLACK");
  Engine.update(engine);

  noStroke();
  textSize(50);
  fill("BLUE");
  text("Score: "+Score,0,50);
  textSize(25);
  text("50",35,700);
  text("100",110,700);
  text("200",185,700);
  text("200",255,700);
  text("100",330,700);
  text("50",415,700);
  
  strokeWeight(5);
  ground.display();

  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Division5.display();
  Division6.display();
  Division7.display();

  if(frameCount % 1 == 0){
    Particles.push(new Particle(random(width/2-240,width/2+240),5,5));
  }
  for(var i = 0;i < Plinkos.length;i++){
    Plinkos[i].display();
  }
  for(var i = 0;i < Particles.length;i++){
    Particles[i].display();
  }
  if(Score <= 12500){
    for(var i = Particles.length-1;i >= 0;i--){
      var particleX = Particles[i].body.position.x;
      var particleY = Particles[i].body.position.y;
      if(particleX > 10 && particleX < 90 && particleY > 750 && particleY < 800){
        Score = Score + 50;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
      if(particleX > 90 && particleX < 170 && particleY > 750 && particleY < 800){
        Score = Score + 100;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
      if(particleX > 170 && particleX < 240 && particleY > 750 && particleY < 800){
        Score = Score + 200;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
      if(particleX > 240 && particleX < 310 && particleY > 750 && particleY < 800){
        Score = Score + 200;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
      if(particleX > 310 && particleX < 390 && particleY > 750 && particleY < 800){
        Score = Score + 100;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
      if(particleX > 390 && particleX < 470 && particleY > 750 && particleY < 800){
        Score = Score + 50;
        World.remove(world,Particles[i].body);
        Particles.splice(i,1);
        continue;
      }
    }
  }
  if(Score > 12500){
    noStroke();
    textSize(50);
    fill("BLUE");
    text("VICTORY",140,340);
  }
}