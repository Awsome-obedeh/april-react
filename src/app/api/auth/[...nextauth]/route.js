import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnection from "@/lib/dbConnect";
import userModel from "@/models/users";
import bcrypt from "bcryptjs";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Learning",
            credentials: {},
            async authorize(credentials, req) {
                await dbConnection()
                // destructure the incoming credentials
                const { username, password } = credentials
                // check if user exists in db
                const user = await userModel.findOne({  firstname: username })
                if (!user) {
                    throw new Error("Invalid Credentials ")
                }

                const passwordMatch = bcrypt.compareSync(password, user.password)
                if (!passwordMatch) {
                    throw new Error("Invalid Credentials ")
                }

                return user
            }
        })
    ]
}
