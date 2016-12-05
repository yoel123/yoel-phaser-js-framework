 ////////  extanded_entity////////

var extanded_entity = function(x,y)
{
	grafic = "extanded_entity_s"
	yentity.call(this,x,y,0,grafic);
	this.type= "extanded_entity";
	this.speed = 3;
};//end extanded_entity
extanded_entity.prototype =  yentity.prototype;

extanded_entity.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.graf.frame = 0;
		yentity_p.mouse_down.call(this)
		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
		this.kyboard_control();
		this.hit_chack();
		yentity_p.update.call(this);
		
	}, //end update
	kyboard_control:function()
	{
		upKey = window.ygame.input.keyboard.addKey(Phaser.Keyboard.UP);
		downKey = window.ygame.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		leftKey = window.ygame.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		rightKey = window.ygame.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		
		w = window.ygame.input.keyboard.addKey(Phaser.Keyboard.W);
		a = window.ygame.input.keyboard.addKey(Phaser.Keyboard.A);
		s = window.ygame.input.keyboard.addKey(Phaser.Keyboard.S);
		d = window.ygame.input.keyboard.addKey(Phaser.Keyboard.D);
		
		if (upKey.isDown || w.isDown)
		{
			yentity_p.move_by.call(this,0,-this.speed);
		}
		else if (downKey.isDown || s.isDown)
		{
			yentity_p.move_by.call(this,0,this.speed);
		}

		if (leftKey.isDown || a.isDown)
		{
			yentity_p.move_by.call(this,-this.speed,0);
		}
		else if (rightKey.isDown || d.isDown)
		{
			yentity_p.move_by.call(this,this.speed,0);
		
		}
	}, //end update
	hit_chack:function()
	{ 
		e2 = y_entity_p.colide.call(this,"extanded_entity2");
		if(e2)
		{
			ytrace("hit");
			yentity_p.move_by.call(e2,2,0);
		}
	}//end click_chack
}
extanded_entity_p = extanded_entity.prototype;

 ////////end  extanded_entity////////