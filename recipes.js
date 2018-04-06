var recipes = function(game){}
 
recipes.prototype = {
  	create: function(){
//        add recipes 
//        create a play button
		var friedChickenButton = this.game.add.button(250,100,"fried_chicken",this.ingredientsAndInstructions,this);
        friedChickenButton.scale.setTo(.5,.5);
		friedChickenButton.anchor.setTo(0.5,0.5);
	},
	ingredientsAndInstructions: function(){
		this.game.state.start("ingredients");
	}
}
