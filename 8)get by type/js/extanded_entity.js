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
		
		this.timer = new y_timer(1);
	
		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
	
		yentity_p.update.call(this);
		
	} //end update


}
extanded_entity_p = extanded_entity.prototype;

 ////////end  extanded_entity////////