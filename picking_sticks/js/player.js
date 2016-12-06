
 ////////  player////////
var player = function(x,y)
{
	yentity.call(this,x,y,0,"player");
	this.type= "player";
	this.speed = 2;
};
player.prototype =  yentity.prototype;
player.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		
		//z-sort
		//window.ygame.world.bringToTop(this.graf);
		window.ygame.world.moveUp (this.graf);
	}, //end init
	update:function()
	{
		this.yinit();
		yentity_p.kyboard_control.call(this);
		//this.pick_stick();
		this.sprite_change();
		yentity_p.update.call(this);
	}, //end update
	pick_stick:function()
	{
		e2 = y_entity_p.colide.call(this,"stick");
		if(e2)
		{
			ytrace("picked");
			e2.rand_pos();
			this.world.score++;
		}
	}, //end pick_stick
	sprite_change:function()
	{
		if(this.dir=="up"){this.graf.frame =0;}
		if(this.dir=="down"){this.graf.frame =2;}
		if(this.dir=="left"){this.graf.frame =3;}
		if(this.dir=="right"){this.graf.frame =1;}
		
	}
};//end player.prototype
player_p = player.prototype;
 //////// end player////////
