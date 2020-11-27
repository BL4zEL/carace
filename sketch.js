var database ;
var gameState = 0;
var playerCount = 0 ;
var form,game,player,allPlayers,rank;
var car1,car2,car3,car4,cars;
var blue,red,yellow,white,tracki,groundi;
var bubble1,bubble2,bubble3,bubble4,bubble5,bubble6,bubble7,bubble;
var powerGroup,powerGroup1,power,index,missile,bullet,sheild,med;
var bubble3e,bubble4e,bubble5e,bubble6e,bubble7e,landmine;
var ran;
var rand;
var move;
var num = 0 ;
var speed = 50 ;
var ranks;
var fuel;
function preload(){
blue=loadImage("images/blue.png")
red =loadImage("images/red.png")
yellow =loadImage("images/yellow.png")
 white =loadImage("images/white.png")
tracki =loadImage("images/track.jpg")
groundi=loadImage("images/ground.png")
bubble =loadImage("images/bubble.png")
bubble1=loadImage("images/bubble1.png")
bubble2=loadImage("images/bubble2.png")
bubble3=loadImage("images/bubble3.png")
bubble3e=loadImage("images/bubble3e.png")
bubble4=loadImage("images/bubble4.png")
bubble4e=loadImage("images/bubble4e.png")
bubble5=loadImage("images/bubble5.png")
bubble5e=loadImage("images/bubble5e.png")
bubble6=loadImage("images/bubble6.png")
bubble6e=loadImage("images/bubble6e.png")
bubble7=loadImage("images/bubble7.png")
bubble7e=loadImage("images/bubble7e.png")
}
function setup(){
createCanvas(displayWidth-120,displayHeight-200)
ran = Math.round(random(1,7))
rand = Math.round(random(1,7))
database= firebase.database()
powerGroup=new Group()
powerGroup1=new Group()
game = new Game();
game.getState();
game.start();
spawnPower();

}
function draw(){
    spawnPower();
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}
if(gameState===2){
    clear(); 
   stroke("black")
   player.getRank();
   text(player.name+  ":"  + ranks , displayWidth/2-75,-2850)
   
}

}
function spawnPower(){
    for ( i = 0; i>-3000; i=i+(-1500)) {
         var b1=createSprite(390,i,25,25);
         b1.addImage(bubble)
         b1.scale=0.5;
         var b2=createSprite(590,i,25,25);
         b2.addImage(bubble)
         b2.scale=0.5;
         var b3=createSprite(790,i,25,25);
         b3.addImage(bubble)
         b3.scale=0.5;
         var b4=createSprite(990,i,25,25);   
         b4.addImage(bubble);
         b4.scale=0.5;
         if(i===0){
         powerGroup1.add(b1)
         powerGroup1.add(b2)
         powerGroup1.add(b3)
         powerGroup1.add(b4)}
         else if(i===-1500)
         { powerGroup.add(b1)
            powerGroup.add(b2)
            powerGroup.add(b3)
            powerGroup.add(b4)}
        }
         }   

                    