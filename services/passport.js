const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

// load the collection users from database
const User = mongoose.model('users');

// serializeUser
// get the id from database and save to cookie
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// deserializeUser
// get the id saved in cookie
// and find the corresponding user id in database
passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});
// google passport OAuth
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			// find if the user exist
			const id = await User.findOne({
				ID: profile.id,
			});

			if (!id) {
				// add new user
				const user = await new User({
					ID: profile.id,
				}).save();
				done(null, user);
			} else {
				done(null, id);
			}
		}
	)
);

// facebook passport
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			// find if the user exist
			const id = await User.findOne({
				ID: profile.id,
			});

			if (!id) {
				// add new user
				const user = await new User({
					ID: profile.id,
				}).save();
				done(null, user);
			} else {
				done(null, id);
			}
		}
	)
);
