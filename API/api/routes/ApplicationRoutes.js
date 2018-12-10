'use strict';
module.exports = function(app) {
  var UserHandlers = require('../controllers/UserController.js');


  app.route('/create_user')
      .post(UserHandlers.create_user);

  app.route('/user_login')
      .post(UserHandlers.user_login);


    };
