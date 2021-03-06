var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser');
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	session = require('express-session'),
	config = require('./config.json'),
	hbs = require('hbs'),
	User = require('./models/User.js');

var app = express();

app.set('views', __dirname + '/templates/views/');
app.set('view engine', 'hbs');

app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret: 'baeMaxLoving'}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static(__dirname + '/public'));
app.use("/client/build", express.static(__dirname + '/client/build'));

app.listen(config.PORT || 3000);


//**********************************

//ROUTING VIEWS

app.get("/", function (req, res) {
	console.log('/ GET');
	
	res.render('index', {layout: "/layouts/main"});
	
});

app.get("/about", function (req, res) {
	console.log("/about GET");
	res.render('about', {layout: "/layouts/main"});
});

app.get("/links", function (req, res) {
	console.log("/links GET");
	res.render('links', {layout: "/layouts/main"});
});

app.get("/members", function (req, res) {
	console.log("/members GET");
	res.render('members', {layout: "/layouts/main"});
});

app.get("/faq", function (req, res) {
	console.log("/faq GET");
	res.render('faq', {layout: "/layouts/main"});
});



//***************



/// MONGOOOSE Database Linking ****

var mongoose = require('mongoose');

var connectDBLink;

if (config.NODE_ENV == "production") {
  connectDBLink = config.MONGO_DB;
} else if (config.NODE_ENV == "development") {
	connectDBLink = config.MONGO_DB;
} else {
	connectDBLink = config.MONGO_DB;
}

mongoose.connect(connectDBLink);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("DB opened");
});

//***********************

/////PASSPORT Session///////////////

passport.use(new LocalStrategy({
		usernameField: "email",
		passwordField: "password"
	},
	function (email, password, done) {
		User.findOne({email: email}, function (err, user) {
			if (err) {return done(err);}
			if (!user) {
				console.log("Incorrect email");
       			return done(null, false, { message: 'Incorrect email.' });
      		}
      		if (!(user.password == password)) {
      			console.log("Incorrect password");
        		return done(null, false, { message: 'Incorrect password.' });
      		}
      		return done(null, user);	
		});
	}
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//*************************
