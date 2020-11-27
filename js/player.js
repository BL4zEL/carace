class Player {
    constructor()
    {   this.index = null;
        this.distance = 0 ; 
        this.name=null;
        this.rank = 0 ;
        this.fuel=10;
        this.move= 350 ;
        this.health=10;


    }
    getCount() {
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",function (data){
            playerCount= data.val();
        })
    
    }
    updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
  
  
}
   update(){
       var playerindex = "Players/player"+this.index;
       database.ref(playerindex).set({
           name:this.name ,
           distance:this.distance,
           rank:this.rank,
           move:this.rank
       })
   }
   static getPlayerInfo(){
    var playerInforef = database.ref("Players")
     playerInforef.on("value",(data)=>{
         allPlayers = data.val();
     })
    

   }
 getRank(){
     var getRankref = database.ref("Players/player"+this.index+"rank")
     getRankref.on("value",(data)=>{
         ranks=data.val();
     })
 }

 getFuel(){
    var getFuelref = database.ref("Players/player"+this.index+"fuel")
    getFuelref.on("value",(data)=>{
        fuel=data.val();
    })
 }
 fuelUpdate(fuel){
    database.ref("Players/player"+this.index).update({
        fuel:fuel
    })


 }
}
