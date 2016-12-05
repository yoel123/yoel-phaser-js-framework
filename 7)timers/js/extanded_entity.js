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
		this.speed = 2;
		this.timer = new y_timer(1);
	
		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
		this.timer_test();
		yentity_p.update.call(this);
		
	}, //end update
	timer_test:function()
	{
		this.timer.update();
		if(y_chack_timer(this.timer))
		{
			ytrace("tick");
			y_entity_p.move_by.call(this,this.speed,0);
		}
	} //end timer_test

}
extanded_entity_p = extanded_entity.prototype;

 ////////end  extanded_entity////////