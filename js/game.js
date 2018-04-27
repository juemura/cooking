
var game = new Phaser.Game(1280, 717, Phaser.AUTO, 'gamediv');
game.state.add('kitchen',kitchenState);
game.state.add('ingredients',ingState);
game.state.start('kitchen')
game.state.start('ingredients');

