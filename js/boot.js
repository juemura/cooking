var boot = function(game){
	console.log("Starting my awesome game", "color:white; background:blue");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","../cooking/images/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
//		this.scale.setScreenSize();
		this.game.state.start("preload");
	}
}