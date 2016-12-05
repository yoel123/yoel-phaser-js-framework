yengine.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
	this.ding;
}

yengine.StartMenu.prototype = {
	
	create: function () {
		
		window.ygame.world.setBounds( 0, 0,window.start_w, window.start_h);//reset world bounds
		
		//start backgrount img add
		startBG = this.add.image(this.world.centerX/2, this.world.centerY/2, 'titleimage');
		//onclick start img
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		//"touch to start" text
		startPrompt = this.add.bitmapText(this.world.centerX/2, this.world.centerY+180, 'eightbitwonder', 'Touch to Start!', 24);
		//"touch to start" text click
		startPrompt.inputEnabled = true;
		startPrompt.events.onInputDown.addOnce(this.startGame, this);
		
		//add ding sound
		//this.ding = this.add.audio('select_audio');
	},

	startGame: function (pointer) {
		this.state.start('Game');
		//this.ding.play();
	}
};