 ////////  extanded_entity////////

var extanded_entity = function(x,y)
{
	grafic = "extanded_entity_s"
	yentity.call(this,x,y,0,grafic);
	this.type= "extanded_entity";

   
};//end extanded_entity
extanded_entity.prototype =  yentity.prototype;

extanded_entity.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.graf.frame = 0;
	
		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
		this.kyboard_control();
		yentity_p.update.call(this);
		
	}, //end update
	kyboard_control:function()
	{
		one = window.ygame.input.keyboard.addKey(Phaser.Keyboard.ONE);
		two = window.ygame.input.keyboard.addKey(Phaser.Keyboard.TWO);
		three = window.ygame.input.keyboard.addKey(Phaser.Keyboard.THREE);
	
		
		if (one.isDown)
		{
			this.graf.frame = 0;
		}
		if (two.isDown)
		{
			this.graf.frame = 1;
		}
		if (three.isDown)
		{
			this.graf.frame = 2;
		}

	}, //end update

}
extanded_entity_p = extanded_entity.prototype;

 ////////end  extanded_entity////////