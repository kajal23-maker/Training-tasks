var User = require("../model/model");

exports.home = (req, res) => {
    User.find()
    .then((data)=>{
        // res.redirect('/add');
        res.render('index', {users: data});
    })
    .catch((err)=>{
        res.send({message:"No data"});
    })
}

exports.add = (req, res) => {
    res.render('add');
}



//add new user
exports.addUser = (req, res) => {
    if(!req.body){
        res.send({message:"body can not be empty"})
    }

    var newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    newUser.save((err)=>{
        if(err){
            console.log(err.message);
        }else{
            res.redirect('/');
        }     
    })
    
}

exports.update = (req, res) =>{
    // console.log(req.body);
    res.render('update');
}


//update existing user
exports.updateUser = (req, res) => {
    var id = req.params.id;
    console.log(id);
    // res.render('update');
    User.findById(id)
    .then((data)=>{
        if(!data){
            res.send({message:"Can not update"})
        }else{
            res.render('update', {users: data});
        }
        console.log(data);
    })
    .catch((err)=>{
        res.send({message:"User not found"});
    })
}


exports.updated = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((data)=>{
        console.log(data);
        res.redirect('/');
    })
    .catch(e=>{
        console.log(e);
    })
}

// //Delete user
exports.deleteuser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user)=>{
        if(!user){
            res.send({message:"Can not delete"});
        }
        else{
            res.redirect('/');
            // res.send({message:"User deleted successfully"});
        }
    })
    .catch((err)=>{
        res.send({message:"User not find"});
    })
}