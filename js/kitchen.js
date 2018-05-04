var kitchen = function (game) {}
var tween = null;
var popup;
var button;

kitchen.prototype = {
   create: function () {
      //        add game title image
      var gameTitle = this.game.add.sprite(250, 50, "kitchen", 1);
      gameTitle.scale.setTo(1, 1);
      gameTitle.anchor.setTo(0.5, 0.5);

      //        create a play button
      //		var playButton = this.game.add.button(450,10,"play",this.playTheGame,this);
      //        playButton.scale.setTo(.5,.5);
      //		playButton.anchor.setTo(0.5,0.5);

      var ingButton = this.game.add.button(
         450, 10, // x, y position
         "ingredients", openWindow, this);
      ingButton.scale.setTo(1, 1);
      ingButton.anchor.setTo(0.5, 0.5);
   },
   playTheGame: function () {
      this.game.state.start("recipes");
   },
   openWindow: function () {

      if ((tween !== null && tween.isRunning) || popup.scale.x === 1) {
         return;
      }

      //  Create a tween that will pop-open the window, but only if it's not already tweening or open
      tween = game.add.tween(popup.scale).to({
         x: 1,
         y: 1
      }, 1000, Phaser.Easing.Elastic.Out, true);

   },

   closeWindow: function () {

      if (tween && tween.isRunning || popup.scale.x === 0.1) {
         return;
      }

      //  Create a tween that will close the window, but only if it's not already tweening or closed
      tween = game.add.tween(popup.scale).to({
         x: 0.1,
         y: 0.1
      }, 500, Phaser.Easing.Elastic.In, true);

   },

   render: function () {

      game.debug.text("Click to open window + drag + close", 32, 32);

   }

}