
    var recipes;
    var kitchen;
    var player;
    var chicken;
    var frenchfries;
    var chowmein;
    var friedrice;

var ingState = {
   preload: function ()
    {
       this.load.image('chicken', 'fried_chicken.png');
     this.load.image('french.fries', 'french_fries.png');
     this.load.image('chow.mein', 'chow_mein.png');
     this.load.image('fried.rice', 'fried_rice.png');
     this.load.image('kitchen', 'kitchen.jpg');
      this.load.image('grader', 'grader.jpg');
    },
    

   create: function ()
    {

       kitchen=this.add.image(640,308, "kitchen");
       player=this.add.image(370,413, "grader");
//      recipes = this.physics.add.staticGroup(); 
     chicken=this.add.image(987, 262, 'chicken');
     frenchfries=this.add.image(1044,251, 'french.fries');
     chowmein=this.add.image(988, 340, 'chow.mein');
     friedrice=this.add.image(1040, 345, 'fried.rice'); 
       
    },

   update: function ()
    {
    }
}
    