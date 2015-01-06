
	var CocreationContainer = Backbone.View.extend({
		tagName: 'div',
		template: JST.cocreation,
		data: {
			songName: 'Song Name',
			songDescription: 'A brief description of the song'
		},
		render: function(){
			this.el.innerHTML = this.template(this.data);
		    return this;
		}
	});

	

