
//define all desktop controller
// desktoploginController = module.exports = require('../desktopapi/controllers/api/users/user')
// sessionApiController = module.exports = require('../desktopapi/controllers/api/activity/session')
// projectDeskApiController = module.exports = require('../desktopapi/controllers/api/project/project')
// activityDeskApiController = module.exports = require('../desktopapi/controllers/api/activity/activity')


//define all controller
commonController = module.exports = require('../controllers/common');
// apiJwtController = module.exports = require('../controllers/jwt');

//APIs Controller
userApiController = module.exports = require('../controllers/user/user.js');
// organizationApiController = module.exports = require('../controllers/organization/organization.js');
// teamApiController = module.exports = require('../controllers/team/team.js');
// projectApiController = module.exports = require("../controllers/project/project.js");
// clientApiController = module.exports = require("../controllers/client/client")
// toDoApiController = module.exports = require('../controllers/to_do/to_do.js')

// //define all dashboard
// dashboardApiController = module.exports = require("../controllers/api/dashboard/dashboard");