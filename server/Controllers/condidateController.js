const condidates = require("../models/condidateSchema")
const moment = require ("moment")


// register condidate
exports.addcondidate = async(req,res)=>
{
   //const file = req.file.filename;
   //console.log(req.file)
   const {fname,lname,email,contact ,emploi, location,gender,status, departement}= req.body;
   if (!fname || !lname || !email || !contact || !emploi || !gender || !location || !status || !departement ) {

      res.status(401).json("All Input is required")
   }
   let cv;
   if (req.file){
      cv = req.file.path
      console.log(cv)
   }
   
 
 try {
   
    const  percon = await condidates.findOne({email:  email});
    
    if(percon){
        res.status(401).json("this user is already exist in our database ")
     }else{
      
        const datecreated = moment (new Date()).format("YYYY-MM-DD hh:mm:ss");
        const conData = new condidates({
            fname,lname,email,contact,emploi,location,gender,status,cv,departement,datecreated 
        });
        await conData.save()
        console.log(conData)
        res.status(200).json(conData);
      
     }

 }catch(error){ 
   res.status(500).json({ message: error.message });
   return;
 }

};
// get all condidate
exports.getallcondidate =async(req,res)=>{
         try{
            /* console.log("test1")
            const userdata = await users.findOne(); 
            console.log(userdata)
            res.status(200).json(userdata) */
           console.log('test1')
           condidate= await condidates.find({}).exec();
           res.status(200).json(condidate)
}catch (error){
   res.status(401).json(error)
}

}

// single condidate get
exports.singlecondidateget = async(req,res)=>{
   const {id}= req.params ;
   console.log(id)

try{
   const condidatedata = await  condidates.findOne({_id:id})
   res.status(200).json(condidatedata)
   
}catch(error){
   res.status(401).json(error)
}
}

//update condidate
exports.updatecondidate = async(req, res) =>{
   const {id}= req.params ;
   try{
   const con= await condidates.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
   res.status(200).json(con)
   }catch(error){
      res.status(404).json(error)
   }
   
}

//delete condidate
exports.deletecondidate = async(req, res) =>{
   const {id}= req.params ;
   try{
   const con= await condidates.findByIdAndDelete(id)
   res.status(200).json("condidate deleted successfully !")
   }catch(error){
      res.status(404).json(error)
   }
   
}


