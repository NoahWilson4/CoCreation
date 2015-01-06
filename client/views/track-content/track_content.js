
var TrackContent = Backbone.View.extend({
	tagName: 'div',
	template: JST.track_content,
	data: {
		userName: 'User Name',
		trackTitle: 'Name of Track',
		likes: 7
	},
	render: function(){
		this.el.innerHTML = this.template(this.data);
		    return this;
	}

});


	
