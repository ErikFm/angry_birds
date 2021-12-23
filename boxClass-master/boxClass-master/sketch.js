const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var CHao;
var passaro1;
var PNG1;
function preload(){
    PNG1=loadImage("bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(830,360,70,70);
    box2 = new Box(990,360,70,70);
    box3 = new Box(830,330,70,70);
    box4 = new Box(990,330,70,70);
    CHao = new Chao(600,390,1200,30);
    CHao1 = new Chao(200,300,400,159);
    porquinho1 = new Porco(910,370);
    porquinho2 = new Porco(910,330);
    madeira1 = new Madeira(910,340,248,PI/2);
    madeira2 = new Madeira(910,310,248,PI/2);
    boxE = new Box(910,310,70,70);
    telhado1 = new Madeira(855,300,110,PI/4);
    telhado2 = new Madeira(960,300,110,PI/-4);
    passaro1 = new Passarinho (120,100);
    //log = new Madeira(230,180,80,PI/2);
    restricao1 = new rest(passaro1.body,{x:300,y:30});
}

function draw(){
    background(PNG1);
    Engine.update(engine);
    box1.display();
    box2.display();
    CHao.display();
    porquinho1.display();
   madeira1.display();
   box3.display();
   box4.display();
   madeira2.display();
   porquinho2.display();
   boxE.display();
   telhado1.display();
   telhado2.display();
   CHao1.display();
   passaro1.display();
   //log.display();
   restricao1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(passaro1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    restricao1.fly()
}
function keyPressed(){
    if (keyCode===32){
        restricao1.atac(passaro1.body);
    }
}