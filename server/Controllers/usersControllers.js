const users = require("../models/userSchema")
const moment = require ("moment")
var bcrypt = require("bcryptjs");

exports.getAll = async function(req, res){

   try {
      const listUsers = await users.find();
      //console.log(listUsers);
      res.json({ listUsers });
   } catch (err) {
      //console.log(err);
      res.status(500).json({ message: err.message });
  }

}

exports.getOne = async function(req, res){
   const id=req.body.id;
   console.log(id)
   try {
      const user = await users.findById(id);
      res.json({ user });
   } catch (err) {
      res.status(500).json({ message: err.message });
  }
}

exports.adduser = async function(req, res){
   var username 	= req.body.username;
	var email 		= req.body.email;
  	var password 	= req.body.password;

  	if (!email || !username || !password){
		res.status(500).json({ message: "Missing parameters" });
	}
	const user = new users({
		username: username,
		email: email,
		password: bcrypt.hashSync(password, 8)
	  });
	
     user.save()
	.then(()=>{
		res.send({ message: "User was registered successfully!" });
	})
	.catch((err)=>{
		res.status(500).send({ message: err });
		  return;
	})
	
	
}

exports.login = async function(req, res){
   users.findOne({
      email: req.body.email
   })
   .then((user)=>{
      if(!user){
         return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);
      if (!passwordIsValid) {
			return res.status(401).send({
			  accessToken: null,
			  message: "Invalid Password!"
			});
		}
      var token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 3600*24 // 1 day
		  });
      res.status(200).send({
			id: user._id,
			username: user.username,
			email: user.email,
			accessToken: token
		});

   })
   .catch((err)=> {
      res.status(500).send({ message: err });
      return;
    })
}