const condidates = require("../models/condidateSchema")
const moment = require ("moment")


// register user 
exports.userpost = async(req,res)=>
{
   //const file = req.file.filename;
   console.log(req)
   const {fname,lname,email,contact ,emploi, location,gender,status}= req.body;
   if (!fname || !lname || !email || !contact || !emploi || !gender || ! location || ! status ) {

      res.status(401).json("All Input is required")
   }



 try {
    const  peruser = await condidates.findOne({email:  email});
    if(peruser){
        res.status(401).json("this user is already exist in our database ")
     }else{
        const datecreated = moment (new Date()).format("YYYY-MM-DD hh:mm:ss");
        const userData = new users({
            fname,lname,email,contact,gender,location,status,profile,emploi: file,datecreated 
        });
        await userData.save()
        res.status(200).json(userData);

     }

 }catch(error){ 
     res.status(401).json(error);
     console.log("catch block error")
  
 }

};
// userget
exports.userget =async(req,res)=>{
         try{
            /* console.log("test1")
            const userdata = await users.findOne(); 
            console.log(userdata)
            res.status(200).json(userdata) */
           console.log('test1')
           user= await condidates.find({}).exec();
           res.status(200).json(user)
}catch (error){
   res.status(401).json(error)
}

}

// single user get
exports.singleuserget = async(req,res)=>{
   const {id}= req.params ;


try{
   const userdata = await  condidates.findOne({_id:id})

   
}catch(error){
   
}
}


