const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"enter the name "]
    },
    email:{
        type:String,
        required:[true,"enter your email"]
    },
    password:{
        type:String,
        required:[true,"enter your email"]
    },
})

module.exports=mongoose.model('userAuth',schema)
