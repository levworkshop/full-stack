var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', users.readList);
router.post('/user', users.addUser);
router.delete('/user', users.deleteUser);
router.patch('/user', users.updateUser);

module.exports = router;
