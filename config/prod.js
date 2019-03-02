// module.export = {
// 	mongoURI:
// 		'mongodb+srv://admin:X64bTBPdaRdESLK8@emaily-prod-1p6dc.mongodb.net/test?retryWrites=true',
// 	cookieKey: 'fwfbwlfbwelbffwelnfwlenf',
// 	googleClientID:
// 		'937849420828-n97ejb9htbk4kpjhtnts64se61p7nsrg.apps.googleusercontent.com',
// 	googleClientSecret: 'oTuNmDQA0WtO69PQ9Bpzgqvf',
// 	facebookClientID: '2140754976236294',
// 	facebookClientSecret: '3ac744a4616973c4061900c9af90ffed',
// };

module.export = {
	mongoURI: process.env.MONGO_URL,
	cookieKey: process.env.COOKIE_KEY,
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	facebookClientID: process.env.FACEBOOK_CLIENT_ID,
	facebookClientSecret: process.env.FACEBOOK_CLIENTsECRET,
};
