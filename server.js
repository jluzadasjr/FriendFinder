// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));   
app.use(bodyParser.json({ type: 'application/**json'}))

app.use(bodyParser.json({ type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});