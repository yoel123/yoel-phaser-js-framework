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
	
	    e = new extanded_entity(150,50);
	    e2 = new extanded_entity(150,150);
	    e3 = new extanded_entity(150,250);
	    e.speed = 0.5;
	    e2.speed = 1;
	    e3.speed = 2;
		yadd(this,e);
		yadd(this,e2);
		yadd(this,e3);
		
	
        

    },

	quitGame: function() 
	{
		//this.state.start('StartMenu');
		yworld_p.change_world.call(this,'StartMenu');
	}, 
	
	move_all: function()
	{
		this.world =this;
		all_extanded_entitys = y_entity_p.get_by_type.call(this,"extanded_entity");
		for (var i in all_extanded_entitys) 
		{
			e = all_extanded_entitys[i];
			ytrace(e);
			y_entity_p.move_by.call(e,e.speed,0);
		}
	},//end move_all
    
	update: function() 
	{
	
		
		
		this.move_all();
		
		yworld_p.yupdate.call(this);
	
	}
    
};
