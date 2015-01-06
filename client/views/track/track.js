

var Track = Backbone.View.extend({
	tagName: 'li',
	template: JST.track,
	data: {
		instrument: 'Instrument Slot'
	},
	render: function(){
		this.el.innerHTML = this.template(this.data);
	    return this;
	}
});

	

