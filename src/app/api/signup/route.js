// export const GET =async()=>{
//     return Response.json({msg:"my first custom api"})
// }

import dbConnection from "@/lib/dbConnect"
import userModel from "@/models/users"
import bcrypt from "bcryptjs"


export const POST = async (req) => {

    try {
        // reciev incoming data, that measn destructure
        // the data send t fro the front end was sent in JSON format, we have to convert to object
        const { firstname, lastname, password } = await req.json()
        if (!firstname || !lastname || !password) {
            return Response.json({ 'msg': 'Please provide firstname, lastname and password' })
        }

        // call the databsse connection
        await dbConnection()
        // before storing user detaisl in the db, hash user password
        const salt= bcrypt.genSaltSync(16)
        const hashedPassword=bcrypt.hashSync(password, salt)
        // store the user data in the database
         const user = new userModel({
            firstname: firstname,
            lastname: lastname,
            password: hashedPassword
        })

        // create new user in the database
        await user.save()
        if(user){

            return Response.json({ msg: "user creasted successfully" })
        }

        else{
            return Response.json({ msg: "user creation failed" })

        }
    }

    catch (err) {
        console.log(err.message)
        return Response.json({ msg: "something went wrong. server Error" })
    }

}