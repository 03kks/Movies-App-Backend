module.exports = (router) => {
    const userController = require("../controllers/user.controller");
  
    router.post("/signup", userController.signUp);
    router.post("/login", userController.login);
    router.post("/logout", userController.logout);
  
    return router;
  } 