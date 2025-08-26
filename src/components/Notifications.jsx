"use client"

import React, { useState } from 'react'
import { LuMessageCircle } from "react-icons/lu";

export default function Notifications() {

    const [messages, setMessages] = useState([
        "Ali posted  for the first time in a long while",
        "john posted today",
        "Sister amaka commented on your post",
        "watchout for your weekned assignment in whatsapp group"])
        const [isShow, setIsShow]=useState(false)

        function handleShow(){
            // two HTTP_METHODS. choose any you like
            // setIsShow(!isShow)
            // setIsShow(prev=> !prev)
        }



    return (
        <>
            <div className='relative w-4 mt-6  '>
                <LuMessageCircle onClick={handleShow} />
                <p className=" absolute -right-2 top-0 h-3 w-3 rounded-full bg-blue-700 flex justify-center items-center text-white text-[8px]">{messages.length}</p>

                {/* cahllenge:
        -If there are no unread messages display "you are all caught up!
        -if there is exactly one unread message, it should read "You have 1 unread message"(singular) 
        -if there are > 1 unread messages, display your have (n) unread messages
        " */}
            </div>
            {
                messages.length > 0 ? <p>You have {messages.length} message{messages.length > 1 ? 's' : ''}</p> : (<p>You are all caught up</p>)
            }

            { isShow && (
                 <div>
                <h2>Notifications</h2>

                <div className="bg-gray-500 w-90 ">

                    {
                        // two ways of doing mappint in react
                        // 1. with curly braces, you have to add return
                        // messages.map((message)=>{
                        //     return(

                        //     )
                        // })

                        // 2. 
                        messages.map((message, index) => (
                            <div key={index}>

                                <p className="text-2xl text-bolder py-2"> {message}</p>
                                <hr />
                            </div>
                        ))


                    }

                    {/* <p className="text-2xl text-bolder ">{messages[1]}</p> */}
                </div>
            </div>
            )}
           
        </>
    )
}
