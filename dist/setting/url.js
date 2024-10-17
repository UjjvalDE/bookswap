module.exports = {
    BindUrl: function () {
		var selfInst = this;
		

		app.get('/version', function (req, res) {
			res.send('Version 1.0');
            // res.sendFile(path.resolve(__dirname,'../../','index.html'))
		});
		
		//this only work for react
		// app.get('/assets/*', (req, res) => {
		// 	var url = req.url;
		// 	if(url.startsWith("/assets/") == true) {
		// 		url = url.replace('/assets/', '');
		// 		res.sendFile(path.resolve(__dirname, '../views/assets/', url));
		// 	} else {
		// 		res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
		// 	}
		// });

		//load react index page
		// app.get('*', (req, res) => {
		//   	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
		// });
		
	}
}
urlLandingPage = module.exports = require('./url/landing');
urlLandingPage.BindUrl();

urlLoginPage = module.exports = require('./url/login');
urlLoginPage.BindUrl();

urlSignupPage = module.exports = require('./url/signup.js');
urlSignupPage.BindUrl();