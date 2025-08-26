"use client"
import React, { useState } from 'react'
import { LuMessageCircle } from "react-icons/lu";

export default function AnthonyNotifications() {
    const messages=['welcome message', 'hello worlld', 'better improve']
    const len = messages.length
    // const [msg, setMsg]=useState(messages.length)
    // const [msgText, setMsgText]=useState("")

    // if(messages.length>1){
    //     setMsgText(`You have${messages.length} unread messages`)

    // }
    // else if(messages.length==0){
    //      setMsgText(`You have${messages.length} unread messages`)

        
    // }
    // else if(messages.length==1){
    //      setMsgText(`You have${messages.length} unread message`)

        
    // }
  


   


    return (
        <>
            <div className='relative w-4 mt-6  '>
                <LuMessageCircle />
                <p className=" absolute -right-2 top-0 h-3 w-3 rounded-full bg-blue-700 flex justify-center items-center text-white text-[8px]"></p>

                {/* cahllenge:
        -If there are no unread messages display "you are all caught up!
        -if there is exactly one unread message, it should read "You have 1 unread message"(singular) 
        -if there are > 1 unread messages, display your have (n) unread messages
        " */}
            </div>
            <p>
                {len==1? "You have 1 unread message":`You have`}
            </p>
        </>
    )
}
