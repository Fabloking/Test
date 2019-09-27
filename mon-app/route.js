// load up our shiny new route for users
const userRoutes = require('./phone');

const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', function(req, res) {
        res.sendfile("App.js");
    });


    // run our user route module here to complete the wire up
    userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;