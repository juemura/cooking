var kitchen = function (game) {}
var tween = null;
var popup;
var button;
var game;
var ingredientTexts = [];


kitchen.prototype = {
   create: function () {
      var ingButton = this.game.add.sprite(
         450, 10, // x, y position
         "play");
      ingButton.inputEnabled = true;
      console.log(this.openWindow);
      ingButton.events.onInputUp.add(this.openWindow);
      ingButton.scale.setTo(1, 1);
      ingButton.anchor.setTo(0.5, 0.5);
     
      var gameTitle = this.game.add.sprite(0, 0, "kitchen", 0);
      gameTitle.scale.setTo(.3, .3);
      
      var chickenButton = this.game.add.sprite(
             310,40,
         "chicken");
      chickenButton.scale.setTo(.025, .025);
      chickenButton.inputEnabled = true;
      chickenButton.events.onInputUp.add(function() {
         console.log("I'm being clicked");
         ingredientTexts[0].fill = "#FF0000";
         chickenButton.visible = false;
      });
      var eggsButton = this.game.add.sprite(
          350,50,
         "eggs");
      eggsButton.scale.setTo(.025, .025);
      eggsButton.inputEnabled = true;
      eggsButton.events.onInputUp.add(function() {
         ingredientTexts[1].fill = "#FF0000";
         eggsButton.visible = false;
      });
      var oilButton = this.game.add.sprite(
          100,10,
          "oil");
      oilButton.scale.setTo(.025,.025);
      oilButton.inputEnabled = true;
      oilButton.events.onInputUp.add(function() {
         ingredientTexts[2].fill = "#FF0000";
         oilButton.visible = false;
      });
      var veggiesButton = this.game.add.sprite(
          370,60,
         "veggies");
      veggiesButton.scale.setTo(.025,.025);
      veggiesButton.inputEnabled = true;
      veggiesButton.events.onInputUp.add(function() {
         ingredientTexts[3].fill = "#FF0000";
         veggiesButton.visible = false;
      });
      var riceButton = this.game.add.sprite(
          150,20,
          "rice");
      riceButton.scale.setTo(.025,.025);
      riceButton.inputEnabled = true;
      riceButton.events.onInputUp.add(function() {
         ingredientTexts[4].fill = "#FF0000";
         riceButton.visible = false;
         
		this.game.state.start("win");
      });

      //        create a play button
      //		var playButton = this.game.add.button(450,10,"play",this.playTheGame,this);
      //        playButton.scale.setTo(.5,.5);
      //		playButton.anchor.setTo(0.5,0.5);

      
      
      game = this.game;
   },
   playTheGame: function () {
      this.game.state.start("recipes");
   },
   openWindow: function () {
      var g = game.add.graphics(400, 50);
      g.beginFill(0xFFFFFF);
      g.drawRect(0, 0, 100, 100);
      function addText(number, ingredient) {
         var text = game.add.text(0, number * 14, ingredient, {"fontSize": 12});
         g.addChild(text);
         ingredientTexts.push(text);
      }
      var ingredients = ["Chicken", "Eggs", "Oil", "Veggies", "Rice"];
      for (var i = 0; i < ingredients.length; i++) {
         addText(i, ingredients[i]);
      }

      //if ((tween !== null && tween.isRunning) || popup.scale.x === 1) {
        // return;
      //}

      //  Create a tween that will pop-open the window, but only if it's not already tweening or open
//      tween = game.add.tween(popup.scale).to({
//         x: 1,
//         y: 1
//      }, 1000, Phaser.Easing.Elastic.Out, true);

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

   }

}