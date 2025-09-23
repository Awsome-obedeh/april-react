import mongoose from "mongoose"

const closeDb= async ()=>{
    await mongoose.disconnect()
    console.log("database connection closed")
}

export default closeDb