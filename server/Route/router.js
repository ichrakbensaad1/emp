const express = require("express");

const router = new express.Router();
const controllers = require("../Controllers/usersControllers");
const upload = require("../multerconfig/storageConfig");

// routes  



//router.post("/user/register",upload.single("user_profile"),controllers.userpost);
//router.get("/user/details",controllers.userget );
//router.get("/user/:id",controllers.singleuserget);
router.get("/allUsers",controllers.getAll);
router.get("/getUser",controllers.getOne);
router.post("/register",controllers.adduser);
router.post("/login",controllers.login);





module.exports = router 