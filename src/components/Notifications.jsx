import React from 'react'
import { LuMessageCircle } from "react-icons/lu";

export default function Notifications() {
  return (
    <div className='relative w-4 mt-6  '>
        <LuMessageCircle/>
        <p className=" absolute -right-2 top-0 h-3 w-3 rounded-full bg-blue-700 flex justify-center items-center text-white text-[8px]">1</p>
        <p>You have one message</p>

        {/* cahllenge:
        -If there are no unread messages display "you are all caught up!
        -if there is exactly one unread message, it should read "You have 1 unread message"(singular) 
        -if there are > 1 unread messages, display your have (n) unread messages
        " */}
    </div>
  )
}
