yengine.Game = function(game) 
{

	yworld.call(this,"world_name");
	this.score = 0;
	this.rank = "none";
	//this.entitys;
	

};

yengine.Game.prototype = {
    
    create: function() 
	{
		
		//window.ygame.world.setBounds(0, 0, 1000, 1333);
		if(!this.created){this.created = true}else{return;}
		this.score_txt = window.ygame.add.bitmapText(30, 10, 'eightbitwonder', 'score: '+this.score, 14);
		this.rank_text = window.ygame.add.bitmapText(150, 10, 'eightbitwonder', 'rank: '+this.rank,14);
		
	    p = new player(150,150);
	    s = new stick(150,150);
		yadd(this,p);
		yadd(this,s);
	
		
        

    },

    

	


	

	quitGame: function() {
		//this.state.start('StartMenu');
		yworld_p.change_world.call(this,'StartMenu');
	}, 
	
	ui: function() 
	{
		this.score_txt.setText('score: '+this.score);
		this.rank_text.setText('rank: '+this.rank);
		score = this.score;
		if(score>4){this.rank="stick picker";}
		if(score>15){this.rank="pro stick picker";}
		if(score>25){this.rank="master stick picker";}
		if(score>30){this.rank="no life";}
		if(score>35){this.rank="you shod stop you know";}
		if(score>40){this.rank="this game never ends";}
		if(score>45){this.rank="just sying its youre life...";}
	},//end ui
	
    update: function() 
	{
	
		
		this.ui();
		
		yworld_p.yupdate.call(this);
	
	}
    
};
