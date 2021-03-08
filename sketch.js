const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,ball;
var dustbin;
function preload(){
    dustbin = loadImage("dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    box2 = new Ground(1100,700,30,100);
    box1 = new Ground(1200,750,200,30);
    ground = new Ground(800,780,1600,20);
    ball = new Ball (200,350,30);
    box3 = new Ground(1300,700,30,100);
}

function draw(){
    background("lightyellow");
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    ball.display();
    box3.display();
   imageMode (CENTER);
   image (dustbin,1200,700,220,120);
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        console.log("i am here")
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
    }
}