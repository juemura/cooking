var recipes = function(game){
    
}
 
recipes.prototype = {
    preload: function(){ 
       
        this.game.load.image("fried_rice","../images/friedrice.jpg");      
	},

    create: function(){
      
//        add recipes 
//        create a play button
		var friedRiceButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"fried_rice",this.kitchen,this);
        friedRiceButton.scale.setTo(.1,.1);
		friedRiceButton.anchor.setTo(0.5,0.5);
        this.game.add.text(
          this.game.world.centerX,0,  // x, y position
          "Fried Rice", 
          { fontSize: "32px", fill: "#fff" }
        );
	},
	kitchen: function(){
		this.game.state.start("kitchen");
	}
}
