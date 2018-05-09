var win = function(game){}
 
win.prototype = {
    create: function(){
        var foodButton = this.game.add.button(300,120,"grader",this.openKitchen,this);
        foodButton.scale.setTo(.5,.5);
		foodButton.anchor.setTo(0.5,0.5);
        this.game.add.text(
          50,0,  // x, y position
          "Good Job!", 
          { fontSize: "32px", fill: "#fff" }
        );
       var dish = this.game.add.button(120,100,"fried_rice",this.openKitchen,this);
       dish.scale.setTo(.1,.1);
       dish.anchor.setTo(0.5,0.5);
	},
	openKitchen: function(){
		this.game.state.start("gametitle");
	}
}



