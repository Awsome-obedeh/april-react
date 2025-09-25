import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnection from "@/lib/dbConnect";
import userModel from "@/models/users";
import bcrypt from "bcryptjs";
import closeDb from "@/lib/closeConnection";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Learning",
            credentials: {},
            async authorize(credentials, req) {
                try{

                    await dbConnection()
                    // destructure the incoming credentials
                    const { username, password } = credentials
                    // check if user exists in db
                    const user = await userModel.findOne({ firstname: username })
                    if (!user) {
                    throw new Error("Invalid Credentials ")
                }
                
                const passwordMatch = bcrypt.compareSync(password, user.password)
                if (!passwordMatch) {
                    throw new Error("Invalid Credentials ")
                }
                
                return user
                }catch(err){
                    console.log("Error message:", err.message)
                    throw new Error(err.message)
                }   

                finally{
                    closeDb()
                }
            },



        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            
            if (user) {
                console.log("user,", user)
                token.id = user._id
                token.username = user.firstname
            }

            console.log("token: ", token)
            return token
        },

        async session(session,token) {
    
            console.log("thl vakue of token before session", token)
            if(token){
                console.log("token:", token)
                
                
                session.user.id = token.id
                session.user.username = token.username
                console.log("session:", session)
            }
            return session
        }
    }
}

const handler=NextAuth(authOptions)
export { handler as GET, handler as POST }
