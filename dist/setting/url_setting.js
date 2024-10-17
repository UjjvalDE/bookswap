
/*
 *	SERVER DEFAULT URL
 * 	--- START ----
 */
// urlHandler = module.exports = require('./url');
// urlHandler.BindUrl();
/*
 *	SERVER DEFAULT URL
 * 	--- END ----
 */

/*
 *	APIs URL Handalder
 * 	--- START ----
 */
//desk api::::
// logindesktopApiHandler = module.exports = require('../desktopapi/setting/api/users/users');
// logindesktopApiHandler.BindUrl();

// projectdesktopApiHandler = module.exports = require('../desktopapi/setting/api/project/project.js');
// projectdesktopApiHandler.BindUrl();

// sessiondesktopApiHandler = module.exports = require('../desktopapi/setting/api/activity/session');
// sessiondesktopApiHandler.BindUrl();

// activitydesktopApiHandler = module.exports = require('../desktopapi/setting/api/activity/activity');
// activitydesktopApiHandler.BindUrl();








usersApiUrlHandler = module.exports = require('./api/user/user.js');
usersApiUrlHandler.BindUrl();

// organizationApiUrlHandler = module.exports = require('./api/landingpage.js');
// organizationApiUrlHandler.BindUrl();

// teamsApiUrlHandler = module.exports = require('./api/team/team.js');
// teamsApiUrlHandler.BindUrl();

// projectsApiUrlHandler = module.exports = require("./api/project/project.js")
// projectsApiUrlHandler.BindUrl()

// clientsApiUrlHandler = module.exports = require("./api/client/client.js")
// clientsApiUrlHandler.BindUrl()

// toDoApiUrlHandler = module.exports = require('./api/to_do/to_do.js')
// toDoApiUrlHandler.BindUrl()


// /*
//     Angular - make this last always for load react - before this APIs and Backend will work
//     --- START ----
// */
urlHanlder = module.exports = require('./url.js');
urlHanlder.BindUrl();

/*
    --- END ----
*/

