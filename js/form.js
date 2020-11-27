class Form {
    constructor()
    { 
    this.input = createInput("NAME")
    this.button = createButton("PLAY") 
    this.greeting = createElement("h3")
    this.reset=createButton("reset")
    }
    display(){
    var title = createElement("h2")
    title.html("CAR RACING GAME")
    title.position(displayWidth/2-150,50)

   

    this.input.position(displayWidth/2-125,displayHeight/2-200)
    this.button.position(displayWidth/2-75,displayHeight/2) 
    this.reset.position(displayWidth-120,50) 
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("HELLO "+ player.name);
        this.greeting.position(displayWidth/2,displayHeight/2);
    });
    this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        player.updateRank(0);
        
        });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
