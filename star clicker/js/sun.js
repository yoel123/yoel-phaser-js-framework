
 ////////  sun////////
var sun = function(x,y)
{
	yentity.call(this,x,y,0,"sun");
	this.type= "sun";
};
sun.prototype =  yentity.prototype;
 sun.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.graf.scale.setTo(0.5, 0.5);
		star_p.rand_pos.call(this);
		yentity_p.clicked.call(this);
	}, //end init
	update:function()
	{
		this.yinit();
		this.click();
		yentity_p.update.call(this);
	}, //end update
	click:function()
	{
		if(this.isclicked)
		{
			ytrace("clicked sun");
			star_p.rand_pos.call(this);
			this.reset_stars();
		}
	},//end click
	
	reset_stars:function()
	{
		stars = y_entity_p.get_by_type.call(this,"star");
		for (var i in stars) 
		{
			s = stars[i];
			s.alpha = 1;
		}
	}//end reset_stars
};//end sun.prototype
sun_p = sun.prototype;
 //////// end sun////////
