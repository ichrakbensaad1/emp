const path = require("path")
const multer = require("multer");
// storage config
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"uploads/")
    },
    filename:(req,file,callback)=>{
        let ext = path.extname(file.originalname)
        //const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,Date.now() + ext)
    }
});
// filter 
const filefilter = (req,file,callback)=>{
    if(file.mimetype === "application/pdf"){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .pdf allowed !"))
    }
}
const upload = multer({
    storage:storage,
    fileFilter:filefilter
});

        
module.exports = upload;