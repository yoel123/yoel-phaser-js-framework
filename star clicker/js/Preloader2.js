yengine.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

yengine.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
       

		//img
        //this.load.image('sky', 'images/sky.png');
        this.load.image('star', 'images/Star.png');
        this.load.image('sun', 'images/sun.png');

		
		//fontS
		  this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        
	
		//spritsheets
		
		//this.load.spritesheet('player', 'images/sword_dude.png',50,50);
		//this.load.spritesheet('extanded_entity_s', 'images/holder.png',50,50);
	
		
		//sound
		
		//this.load.audio('explosion_audio', 'audio/explosion.mp3');


	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
	   	this.ready = true;
        this.state.start('StartMenu');
	},

	
};

yimg = function(name,src)
{
		window.ygame.load.image(name, src);
};
