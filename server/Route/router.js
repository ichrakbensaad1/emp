const express = require("express");

const router = new express.Router();
const controllers = require("../Controllers/usersControllers");
const condidateController = require("../Controllers/condidateController")
const upload = require("../multerconfig/storageConfig");

// routes  



//router.post("/user/register",upload.single("user_profile"),controllers.userpost);
//router.get("/user/details",controllers.userget );
//router.get("/user/:id",controllers.singleuserget);
router.get("/allUsers",controllers.getAll);
router.get("/getUser",controllers.getOne);
router.post("/register",controllers.adduser);
router.post("/login",controllers.login);
router.post("/addcondidate",upload.single('cv'),condidateController.addcondidate);
router.get("/allcondidates",condidateController.getallcondidate);
router.get("/getcondidate/:id",condidateController.singlecondidateget);
router.put("/updatecondidate/:id",condidateController.updatecondidate);
router.delete("/deletecondidate/:id",condidateController.deletecondidate);





module.exports = router 