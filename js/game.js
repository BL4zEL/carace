class Game {
    constructor(){


    }
    getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val();
        }
    )
    }
    update(State){
    database.ref("/").update({
        gameState:State
    })    
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
            car1 = createSprite(300,200)
            car2 = createSprite(500,200)
            car3 = createSprite(700,200)
            car4 = createSprite(900,200)
            car1.addImage(blue);
            car2.addImage(yellow);
            car3.addImage(red);
            car4.addImage(white)
            cars= [car1,car2,car3,car4]
        }
    }
    play(){
    form.hide();
   //player.getRank();
    Player. getPlayerInfo();
    if(allPlayers!==undefined){
        background(groundi);
        image(tracki,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index = 0 ;
        var x = x+200
        var y = y ;
            for(var plr in allPlayers){
            y = displayHeight - 275 - allPlayers[plr].distance
            x = allPlayers[plr].move
            console.log(x)
            cars[index].x = x ;
            cars[index].y = y ;
            if(plr==="player"+player.index)
            {cars[index].shapeColor=("red")
            camera.position.x= displayWidth/2;
            camera.position.y= y;
            for(i=0;i<powerGroup1.length;i++){
            if(powerGroup1.get(i).isTouching(cars[index])){
            powerGroup1.get(i).destroy();
            num=1;

            }  }
            for(i=0;i<powerGroup.length;i++){
                if(powerGroup.get(i).isTouching(cars[index])){
                powerGroup.get(i).destroy();
                num=2;

                } 
             }
       if(num===1&&rand===1&&keyDown("W")){
           speed=100;
       }
       if(num===1&&rand===2&&keyDown("W")){
        player.fuelUpdate(10);}
        if(num===1&&rand===3&&keyDown("W")){
         missile=createSprite(cars[index].x,cars[index].y,25,50) 
           missile.velocityY= -8 
           missile.addImage(bubble3e);
           rand=0;
        }
      if(num===1&&rand===4&&keyDown("W")){
         bullet=createSprite(cars[index].x,cars[index].y,25,50) 
        bullet.velocityY= -8 
        bullet.addImage(bubble4e);
        rand=0;
       }
      if(num===1&&rand===5&&keyDown("W")){
         sheild=createSprite(cars[index].x,cars[index].y,50,50) 
         sheild.addImage(bubble5e);
         rand=0;
       }
       if(num===1&&rand===6&&keyDown("W")){
        landmine=createSprite(cars[index].x,cars[index].y,50,50) 
        landmine.addImage(bubble6e);
        rand=0;
      }
      if(num===1&&rand===7&&keyDown("W")){
        med=createSprite(cars[index].x,cars[index].y,50,50) 
        med.addImage(bubble7e);
        rand=0;
      }       

      if(num===2&&ran===1&&keyDown("W")){
        speed=100;
    }
    if(num===2&&ran===2&&keyDown("W")){
     player.fuelUpdate(10);}
     if(num===2&&ran===3&&keyDown("W")){
      missile=createSprite(cars[index].x,cars[index].y,25,50) 
        missile.velocityY= -8 
        missile.addImage(bubble3e);
        ran=0;
     }
   if(num===2&&ran===4&&keyDown("W")){
      bullet=createSprite(cars[index].x,cars[index].y,25,50) 
     bullet.velocityY= -8 
     bullet.addImage(bubble4e);
     ran=0;
    }
   if(num===2&&ran===5&&keyDown("W")){
      sheild=createSprite(cars[index].x,cars[index].y,50,50) 
      sheild.addImage(bubble5e);
      ran=0;
    }
    if(num===2&&ran===6&&keyDown("W")){
     landmine=createSprite(cars[index].x,cars[index].y,50,50) 
     landmine.addImage(bubble6e);
     ran=0;
   }
   if(num===2&&ran===7&&keyDown("W")){
     med=createSprite(cars[index].x,cars[index].y,50,50) 
     med.addImage(bubble7e);
     ran=0;
   }      
    
    
    
    
    
    }
            else
            {cars[index].shapeColor="blue"}
            index = index + 1
            }
            if(num===1){
                game.displayPower1();
            }
            if(num===2){
                game.displayPower1();
                game.displayPower();
            }
            
 drawSprites();
    }
    if(keyDown("UP_ARROW")){
    player.distance = player.distance + speed ;
    player.update();
    }
    if(keyDown("RIGHT_ARROW")){
        player.move=player.move+50
        player.update();
        }
        if(keyDown("LEFT_ARROW")){
            player.move=player.move-50
            player.update();   
            }
 //console.log(allPlayers);
  if(player.distance>3400){
  gameState=2;
  player.rank = player.rank+1
  player.update();
  
  }
  
    }
     displayPower(){
       // console.log("HI")
        switch (ran) {
            case 1 :
            image(bubble1,150,camera.position.y-200,100,100)   
            break;
            case 2 :
            image(bubble2,150,camera.position.y-200,100,100)   
            break;
            case 3 :
            image(bubble3,150,camera.position.y-200,100,100)   
            break;
            case 4 :
            image(bubble4,150,camera.position.y-200,100,100)   
            break;
            case 5 :
            image(bubble5,150,camera.position.y-200,100,100)   
            break;
            case 6 :
            image(bubble6,150,camera.position.y-200,100,100)   
            break;
            case 7 :
            image(bubble7,150,camera.position.y-200,100,100)   
            break;
            default:
                break;
             
        }
    }

    displayPower1(){
        // console.log("HI")
         switch (rand) {
             case 1 :
             image(bubble1,150,camera.position.y,100,100)   
             break;
             case 2 :
             image(bubble2,150,camera.position.y,100,100)   
             break;
             case 3 :
             image(bubble3,150,camera.position.y,100,100)   
             break;
             case 4 :
             image(bubble4,150,camera.position.y,100,100)   
             break;
             case 5 :
             image(bubble5,150,camera.position.y,100,100)   
             break;
             case 6 :
             image(bubble6,150,camera.position.y,100,100)   
             break;
             case 7 :
             image(bubble7,150,camera.position.y,100,100)   
             break;
             default:
                 break;
              
         }
     }
  

}

