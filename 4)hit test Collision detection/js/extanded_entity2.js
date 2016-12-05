 ////////  extanded_entity////////

var extanded_entity2 = function(x,y)
{
	grafic = "extanded_entity_s"
	yentity.call(this,x,y,0,grafic);
	this.type= "extanded_entity2";

};//end extanded_entity
extanded_entity2.prototype =  yentity.prototype;

extanded_entity2.prototype = 
{
	yinit:function()
	{
		if(this.did_init){return;}
		this.did_init = true;
		this.graf.frame = 4;

		
		
	}, //end init
	
	update:function()
	{
		this.yinit();
		yentity_p.update.call(this);
		
	} //end update
	
}
extanded_entity2_p = extanded_entity2.prototype;

 ////////end  extanded_entity////////