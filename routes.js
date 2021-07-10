const session = require("express-session");
const bcrypt = require("bcrypt");
const ObjectId = require("mongodb").ObjectId;
const saltRounds = 12;

module.exports = function(app, db) {
  app.use(
    session({
      secret: process.env.SECRET_SESSION_KEY,
      resave: true,
      saveUninitialized: true
    })
  );

  app.get("/", function(request, response) {
    response.render(`${__dirname}/views/index.ejs`);
  });
  
  
  
  /*                                     helper methods depends on app and db added here                                    */
  const logged_in = function(id) {
    if (typeof id === "undefined") {
      return false;
    }

    return true;
  };
  /*                                     helper methods depends on app and db added here                                    */
};
