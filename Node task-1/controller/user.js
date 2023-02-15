var users = [
    {
        "id":1,
        "name":"kajal",
        "age":21,
        "city":"Indore"
    }
]

//get all users
exports.getUsers = (req, res) => {
    res.json(users);
}


//add new user
exports.addUser = (req, res) => {
    var newUser = req.body
    users.push(newUser)
    res.json(users)
}


//update existing user
exports.updateUser = (req, res) => {
    var oneUser = users.find((user) => user.id == req.params.id);
    oneUser.name = req.body.name;
    oneUser.age = req.body.age;
    oneUser.city = req.body.city;
    res.json(users);
}


//Delete user
exports.deleteuser = (req, res) => {
    users = users.filter((user) => user.id != req.params.id);
    res.json(users);
}