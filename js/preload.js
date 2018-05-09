var preload = function(game){}
preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(250,100,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.game.load.image("gametitle","../images/gametitle.png");
        this.game.load.image("play","../images/play.png");
//        this.game.load.spritesheet("kitchen","../images/NEW KITCHEN FRAMES.png",250,140,6);
//        this.game.load.image("gameover","gameover.png");
//         this.game.load.image('player', 'player.png');
//        this.game.load.image('wall', 'wall.png');
//        this.game.load.image('coin', 'coin.png');
//        this.game.load.image('lava', 'lava.png');   this.load.image('friedrice', 'images/fried_rice.png');
        this.load.image('kitchen', 'images/kitchen.jpg');
        this.load.image('chicken', 'images/chicken.png');
        this.load.image('eggs', 'images/eggs.jpg');
        this.load.image('oil', 'images/oil.jpg');
        this.load.image('veggies', 'images/veggies.jpg');
        this.load.image('rice', 'images/rice.jpg');
        this.load.image("fried_rice","../images/friedrice.jpg");
        this.load.image("grader","../images/grader.jpg");
	},
  	create: function(){
		this.game.state.start("gametitle");
	}
}
