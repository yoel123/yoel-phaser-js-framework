
 ////////  star////////
var star = function(x,y)
{
	yentity.call(this,x,y,0,"star");
	this.type= "star";
	
	this.alpha =1;
};
star.prototype =  yentity.prototype;
 star.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.graf.scale.setTo(0.3, 0.3);
		this.rand_pos();
		yentity_p.clicked.call(this);
	}, //end init
		update:function()
	{
		this.yinit();
		this.click();
		this.fade();
		yentity_p.update.call(this);
	}, //end update
	rand_pos:function()
	{
	
		this.x = y_random(20,300);
		this.y = y_random(65,300);
		yentity_p.move_by.call(this,0,0);
	}, //end rand_pos
	click:function()
	{
		if(this.isclicked && this.alpha>0)
		{
			ytrace("clicked star");
			this.rand_pos();
			this.world.score++;
		}
	},//end click
	fade:function()
	{
		if(this.alpha>0)
		{
			this.alpha -= 0.004;
		}
		if(this.alpha<0.004)
		{
			this.alpha = 0;
		}
		yentity_p.alpha.call(this,this.alpha);
	}
};//end star.prototype
star_p = star.prototype;
 //////// end star////////
