const router = require('express').Router();

const Users = require('./users-model.js');
// const authenticate = require('../auth/authenticate-middleware.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

module.exports = router;