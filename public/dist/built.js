


var User = Backbone.Model.extend({
	defaults: function(){
		var now = new Date();
		var userDefaults = {
			joined: now,
			newUser: true
		};
		return userDefaults;
	},
	signIn: function(){

	},
	signOut: function(){
		
	}	
});

var Users = Backbone.Collection.extend({
	model: User
});

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


	
var Navbar = Backbone.View.extend({
	tagName: 'div',
	template: JST.navbar,
	data: {
		userName: "User's Name"
	},
	render: function() {
	    this.el.innerHTML = this.template(this.data);
	    return this;
	}
});

	


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

	


// create database of users
var users = new Users();



// navbar
var nav = new Navbar();
$('#nav').append(nav.render().el);

// view for cocreationsongs
var song = new CocreationContainer();
$('#cocreation').append(song.render().el);

// track slot for instruments
var track = new Track();
$('#tracks').append(track.render().el);

// track content to be displayed inside instrument slot
var newTracKContent = new TrackContent();
$('#track-content').append(newTracKContent.render().el);

// view to create a new user form
var newUserForm = new CreateUser();
$('#create-user').append(newUserForm.render().el);


