module.exports = {
    BindUrl: function () {
        var selfInst = this;

        // this only work for react
        app.get('/signup', (req, res) => {
            var url = req.url;
            if (url.startsWith("/assets/") == true) {
                url = url.replace('/assets/', '');
                res.sendFile(path.resolve(__dirname, '../views/assets/', url));
            } else {
                req.data = {
                    pageTitle: 'signup',
                    socialLinks: [
                        {
                            url: "#",
                            iconClass: "icon icon-facebook"
                        }
                    ],
                    cartItemCount:0
                };
                
            res.render('signup', req.data)
        }
		});

    // load react index page
    // app.get('*', (req, res) => {
    //   	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
    // });

}
}