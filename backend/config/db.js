const mongoose=require('mongoose')

const db=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL)
        if(connect){
            console.log("db connected")
        }
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports=db