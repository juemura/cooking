    var recipes;
    var kitchen;
    var player;
    var friedrice;

var ingState = {
   preload: function ()
    {
        this.load.image('friedrice', 'images/fried_rice.png');
        this.load.image('kitchen', 'images/kitchen.jpg');
        this.load.image('chicken', 'images/chicken.png');
        this.load.image('eggs', 'images/eggs.jpg');
        this.load.image('oil', 'images/oil.jpg');
        this.load.image('veggies', 'images/veggies.jpg');
        this.load.image('rice', 'images/rice.jpg');
        this.load.spritesheet('kitchenframes', 'images/kitchenFrames.png');
     
    },
    

   create: function ()
    {

       kitchen=this.add.image(640,308, "kitchen");
       player=this.add.image(370,413, "grader");
//      recipes = this.physics.add.staticGroup(); 
       friedrice=this.add.image(1040, 345, 'friedrice'); 

        this.game.add.text(
          this.game.world.centerX, 0,
            "1. Chicken", 
          { fontSize: "32px", fill: "#fff" }
        );
        this.game.add.text(
          this.game.world.centerX, 0,
            "2. Eggs", 
          { fontSize: "32px", fill: "#fff" }
        );
        this.game.add.text(
          this.game.world.centerX, 0,
            "3. Mixed Vegetables", 
          { fontSize: "32px", fill: "#fff" }
        );
        this.game.add.text(
          this.game.world.centerX, 0,
            "4. Oil", 
          { fontSize: "32px", fill: "#fff" }
        );
        this.game.add.text(
          this.game.world.centerX, 0,
            "5. Rice", 
          { fontSize: "32px", fill: "#fff" }
        );
        
       
    },

   update: function ()
    {
        
    }
}
    

///

var recipes = function(game){}
 
recipes.prototype = {
    preload: function(){ 
       
        this.game.load.image("fried_rice","images/friedrice.jpg");      
	},
  	create: function(){
      
//        add recipes 
//        create a play button
		var setKitchen = this.game.add.button(this.game.world.centerX,this.game.world.centerY, "kitchen",this.ingredientsAndInstructions,this);
        setKitchen.scale.setTo(1,1);
		setKitchen.anchor.setTo(0.5,0.5);
        this.game.add.text(
          this.game.world.centerX,0,  // x, y position
          "Fried Rice", 
          { fontSize: "32px", fill: "#fff" }
        );
	},
	ingredientsAndInstructions: function(){
		this.game.state.start("ingredients");
	}
}