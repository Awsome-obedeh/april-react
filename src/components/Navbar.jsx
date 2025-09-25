"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const session=useSession()
  console.log(session)

 


  return (
    <div className="bg-white   h-10 flex justify-between text-black">
      
        <Link href="">Home</Link>
        <Link href="">Home</Link>
        <Link href="">Home</Link>

        {
          session.status=="unauthenticated" ? ((<Link href='/login'>
       <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>

      </Link>)) :         <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>

        }

    </div>
  )
}



