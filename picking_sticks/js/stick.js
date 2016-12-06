
 ////////  stick////////
var stick = function(x,y)
{
	yentity.call(this,x,y,0,'stick');
	this.type= "stick";
	//this.grafic_type ="img";
	
};
stick.prototype =  yentity.prototype;
stick.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.rand_pos();
		this.graf.z =0;
	}, //end init
	update:function()
	{
		this.yinit();
		yentity_p.update.call(this);
	}, //end update
	rand_pos:function()
	{
	
		this.x = y_random(20,300);
		this.y = y_random(65,300);
		yentity_p.move_by.call(this,0,0);
	} //end rand_pos
};//end stick.prototype
stick_p = stick.prototype;
 //////// end stick////////
