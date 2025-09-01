
"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignupForm() {
    const router=useRouter()
    const correctUsername="webdev"
    const correctPassword="April@2025"

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const [usernameErr, setUsernameErr]=useState('')
    const [passwordErr, setPasswordErr]=useState('')

    const handleSubmit=(e)=>{
        // prevent form deafult submit

        e.preventDefault()
        if(!username){
            setUsernameErr("please Provide username")
            
        }
        if(!password){
            setPasswordErr("please Provide password")
            
        }
        // if the username and password input is filled up
        if(username && password){
            console.log("sent")
            setPasswordErr('')
            setUsernameErr('')
            // compare username sent by the user to the one we have
            if(username===correctUsername && password===correctPassword){
                // user logged in succefully- route user to the movies page
                router.replace('/movies')
                
            }
            else{
                setUsernameErr("user info is invalid")
            }
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-900 mb-2" htmlFor="firstName">Username</label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={(e)=>(setUsername(e.target.value))}
                        value={username}
                        
                        
                    />
                   {usernameErr && <label htmlFor="" className="text-red-700">{usernameErr}</label>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-900 mb-2" htmlFor="lastName">Password</label>
                    <input
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={(e)=>(setPassword(e.target.value))}
                        
                    />

                   { passwordErr && <label htmlFor="" className="text-red-700">{passwordErr}</label>}
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
