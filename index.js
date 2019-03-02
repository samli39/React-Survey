const express = require('express');
// express don't support cookies
// need cookie-seesion to deal with that
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// mongo database
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// set the port
const port = process.env.PORT || 3000;
const app = express();

// set up cookies
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

// tell passport to make use of cookie
app.use(passport.initialize());
app.use(passport.session());

// pass app to authRoute file
require('./routes/authRoutes')(app);

app.listen(port, () => {
	console.log('server up!');
});
