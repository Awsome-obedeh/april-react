import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        requred:true
    }
},{timestamps:true})
// model the schema
const userModel= mongoose.models.user || mongoose.model('user', userSchema)

export default userModel