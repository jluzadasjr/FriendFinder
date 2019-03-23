// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i]);
      totalDifference = 0;

      for (var x = 0; x < friendsData.scores[i]; x++) {

        totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friendsData[i].scores[x]));

        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friendsData.push(userData);

    res.json(bestMatch);
    //  get total user score  
    //get total use score for each friend
    //compare user score with friend's score
    //find friend with least difference 
    //once you have friend, send friend name and photo to front end.

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   friendsData.push(req.body);
    //   res.json(false);
    // }
    // res.send("random string");
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendsData.length = [];
    friend.length = [];

    res.json({ ok: true });
  });
};