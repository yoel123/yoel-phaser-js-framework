 ////////  extanded_entity////////

var extanded_entity = function(x,y)
{
	grafic = "extanded_entity_s"
	yentity.call(this,x,y,0,grafic);
	this.type= "extanded_entity";
	this.speed=1;
};//end extanded_entity
extanded_entity.prototype =  yentity.prototype;

extanded_entity.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		ytrace("init extanded_entity");
		this.graf.frame = 0;
		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
		yentity_p.update.call(this);
		y_entity_p.move_by.call(this,this.speed,0);
	} //end update
	
}
extanded_entity_p = extanded_entity.prototype;

 ////////end  extanded_entity////////