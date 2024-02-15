const mongoose =require("mongoose")
require("dotenv").config()

try {
    mongoose.connect(process.env.DB).then(()=>{
    console.log("Database connection successfull");
})
} catch (error) {
    res.Status(400).send(error)
    
}

const schema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }

})

// Exports
const usermodel= mongoose.model("userdetails", schema);
module.exports=usermodel;