var preload = function(game){}
preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(250,100,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.load.image("gametitle","images/gametitle.png");
        this.load.image("play","images/play.png");
        this.load.image("kitchen", 'images/kitchen.jpg');
        this.load.image("chicken", 'images/chicken.png');
        this.load.image("eggs", 'images/eggs.jpg');
        this.load.image("oil", 'images/oil.jpg');
        this.load.image("veggies", "images/veggies.jpg");
        this.load.image("rice", "images/rice.jpg");
        this.load.image("fried_rice","images/friedrice.jpg");
        this.load.image("grader","images/grader.jpg");
	},
  	create: function(){
		this.game.state.start("gametitle");
	}
}
