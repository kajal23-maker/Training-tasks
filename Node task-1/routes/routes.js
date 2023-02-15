var express = require("express");
var users = require("../controller/user");
var router = express.Router();

router.get("/", users.getUsers);
router.post('/adduser', users.addUser);
router.put('/updateuser/:id', users.updateUser);
router.delete('/deleteuser/:id', users.deleteuser);

module.exports = router;