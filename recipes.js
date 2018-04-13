var recipes = function(game){}
 
recipes.prototype = {
    preload: function(){ 
       
        this.game.load.image("fried_rice","images/friedrice.jpg");      
	},
  	create: function(){
      
//        add recipes 
//        create a play button
		var friedChickenButton = this.game.add.button(250,100,"fried_rice",this.ingredientsAndInstructions,this);
        friedChickenButton.scale.setTo(.1,.1);
		friedChickenButton.anchor.setTo(0.5,0.5);
        this.game.add.text(
          0, 0,  // x, y position
          "Fried Rice", 
          { fontSize: "32px", fill: "#fff" }
        );
	},
	ingredientsAndInstructions: function(){
		this.game.state.start("ingredients");
	}
}
