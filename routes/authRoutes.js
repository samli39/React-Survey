const passport = require('passport');
// passport.authenticate() is help us deal with auth
// based on the callback information,
// it knows what to do
module.exports = (app) => {
	// google auth
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);
	// google auth callback
	app.get('/auth/google/callback', passport.authenticate('google'));

	// facebook auth
	app.get(
		'/auth/facebook',
		passport.authenticate('facebook', {
			profileFields: ['id', 'email', 'name'],
		})
	);

	// facebook auth callback
	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	// req=coming request
	// res = send
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	// logout function is from passport and
	// attached to req
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
};
