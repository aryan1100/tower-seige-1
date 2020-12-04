const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
b21,b22,b23,b24,b25,b26,b27,b28,b29,b30;

var base1,base2,groundS

var bomb,string
function setup(){

    engine = Engine.create();
    world = engine.world;
canvas =  createCanvas(1200,1200)
bomb = new gun(1000,400)


b1 = new box(300,400)
b2 = new box(320,400)
b3 = new box(340,400)
b4 = new box(360,400)
b5 = new box(380,400)
b6 = new box(310,370)
b7 = new box(330,370)
b8 = new box(350,370)
b9 = new box(370,370)
b10 = new box(320,330)
b11 = new box(340,330)
b12 = new box(360,330)
b13 = new box(330,300)
b14 = new box(350,300)
b15 = new box(340,270)

base1 = new base(280,450,260,15)
b16 = new box(600,300)
b17= new box(620,300)
b18 = new box(640,300)
b19 = new box(660,300)
b20 = new box(680,300)
b21 = new box(610,270)
b22 = new box(630,270)
b23 = new box(650,270)
b24 = new box(670,270)
b25 = new box(620,240)

b26 = new box(640,240)
b27 = new box(660,240)
b28 = new box(630,210)
b29 = new box(650,210)
b30 = new box(640,180)

base2 = new base(580,350,260,15)

string = new chain(bomb.body,{x:1000,y:400})

groundS= new ground(width/2,600)

}

function draw(){
  background(220)
    Engine.update(engine);
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b29.display();
b30.display();
base1.display();
base2.display();
bomb.display();
string.display();
groundS.display()
}

function mouseDragged(){
  Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if(keyCode === 32){
   
      string.attach(bomb.body);
  }
}
