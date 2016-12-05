yengine.Game = function(game) 
{

	yworld.call(this,"world_name");
	
	//this.entitys;

};

yengine.Game.prototype = {
    
    create: function() 
	{
		
		//window.ygame.world.setBounds(0, 0, 1000, 1333);
		if(!this.created){this.created = true}else{return;}
	
	    e = new extanded_entity(150,150);
		yadd(this,e)
		//yworld.prototype.yadd.call(this,e);
		
        

    },

    

	


	

	quitGame: function() {
		//this.state.start('StartMenu');
		yworld_p.change_world.call(this,'StartMenu');
	}, 
    update: function() 
	{
	
		
		
		
		yworld_p.yupdate.call(this);
	
	}
    
};
