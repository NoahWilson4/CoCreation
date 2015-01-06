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


