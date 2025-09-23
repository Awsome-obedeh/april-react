import closeDb from "@/lib/closeConnection"
import dbConnection from "@/lib/dbConnect"
import userModel from "@/models/users"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        // take incoming credentials
        // console.log(req)
        let { username, userPassword } = await req.json()
        // call datbase connection
        await dbConnection()
        const user = await userModel.findOne({ firstname: username })
        if (!user) {
            return Response.json({ msg: "Invalid credentials " }, { status: 401 })

        }

        // if th username is correct, compare the user password with the hashed password in the db
        const passwordTrue=bcrypt.compareSync(userPassword, user.password)
        if(!passwordTrue){
            return Response.json({ msg: "Invalid credentials" }, { status: 401 })

        }
            const {password, __v, ...userdetails}=user._doc
            return Response.json({msg: "successfull login", userdetails}, { status: 200 })


    }

    catch (err) {
        console.log(err.message)
        return Response.json({ msg: "Server Error" }, { status: 500 })
    }

    finally {
        await closeDb()
    }


}