const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "index")
  .add("form", "/userform1", "UserForm")
  .add("login", "/login", "login");
