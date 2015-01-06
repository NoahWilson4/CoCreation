var CreateUser = Backbone.View.extend({
	tagName: 'form',
	template: JST.create_user,
	el: this.template,
	render: function(){
		this.el.innerHTML = this.template();
		return this;
	},
	events: {
	 	'submit': 'createUser'
	},
	createUser: function(e){
		console.log('click');
		e.preventDefault();
		console.log(this);
		var form = $(e.target);
		var data = {};
		data.userName = $(form).find('[name=name]').val();
		data.email = $(form).find('[name=email]').val();
		data.password = $(form).find('[name=password]').val();
		data.location = $(form).find('[name=location]').val();
		data.birthdate = $(form).find('[name=birthdate]').val();
		console.log('data:', data);

		var newUser = users.create(data);
		console.log('newUser: ', newUser);
	}
});