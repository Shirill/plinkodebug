var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState="play";
var particle;

var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
      
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  
}
 


function draw() {

  background("black");
 
  Engine.update(engine);
  ground.display();

  fill ("white");
      text("500 ",24,530);
      text("500 ",104,530);
      text("500 ",184,530);
      text("500 ",264,530);
      text("100 ",344,530);
      text("100 ",424,530);
      text("100 ",507,530);
      text("200 ",587,530);
      text("200 ",667,530);
      text("200 ",747,530);
  push ();
  strokeWeight(4);
  stroke("yellow")
  line (0,460,800,460);
  pop ();
   
  textSize(20);
  text("Score : "+score,20,30);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
if(gameState==="play"){
   if(particle!=null){

    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<320)
      {
        score=score+500;
        particle=null;
        console.log("500");
        if(count>=5)
        gameState="end";
       
      }

    
         else (particle.body.position.x >321 && particle.body.position<600)
          {
            score=score+100;
            particle=null;
            console.log("100");
            if(count>=5)
            gameState="end";
           


        }
      }
//console.log("hello");
     /* if(particle.body.position.x>301 && particle.body.position<600)
      {
        score=score+100;
        console.log("100");
        particle=null;
        if(count>=5)
        gameState="end";
        
        
      }

      else(particle.body.position.x>601 && particle.body.position<900)
      {
        score=score+200;
        particle=null;
        console.log("200");
        if(count>=5)
        gameState="end";
       
      }*/
    
    
    }
  }

  if(gameState==="end"){
    push ();
    textSize(70);
    text("GAME OVER",200,350);
    pop ();
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if (gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}