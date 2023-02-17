var express = require("express");
var users = require("../controller/user");
var router = express.Router();
const {check} = require('express-validator')

router.get("/", users.home)
router.get("/add", users.add);
router.post("/add", users.addUser);
router.get('/update/:id', users.updateUser);
router.post('/update/:id', users.updated);
router.get('/delete/:id', users.deleteuser);

module.exports = router;