import mongoose from "mongoose"
export default async function dbConnection(){
    try{
        // establisha connection to your mongoDb atlas
        const dbConnect= await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected")
        return dbConnect;
    }
    catch(err){
        console.log(err.message)
    }
}