var preload = function(game){}
preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(250,100,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.game.load.image("gametitle","../cooking/images/gametitle.png");
        this.game.load.image("play","../cooking/images/play.png");
//        this.game.load.image("gameover","gameover.png");
//         this.game.load.image('player', 'player.png');
//        this.game.load.image('wall', 'wall.png');
//        this.game.load.image('coin', 'coin.png');
//        this.game.load.image('lava', 'lava.png');
	},
  	create: function(){
		this.game.state.start("gametitle");
	}
}
