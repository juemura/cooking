var recipes = function(game){}
 
recipes.prototype = {
    
    create: function(){
        var foodButton = this.game.add.button(this.game.world.centerX,120,"fried_rice",this.openKitchen,this);
        foodButton.scale.setTo(.1,.1);
		foodButton.anchor.setTo(0.5,0.5);
        this.game.add.text(
          this.game.world.centerX,0,  // x, y position
          "Fried Rice", 
          { fontSize: "32px", fill: "#fff" }
        );
	},
	openKitchen: function(){
		this.game.state.start("kitchen");
	}
}



