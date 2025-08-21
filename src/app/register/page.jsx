
"use client"
import React, { useState } from 'react'

const page = () => {
    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [password, setPassword]=useState('')
    const [err, setErrmsg]= useState('')



    // function to handle submit
    const handleSubmit=(e)=>{
        // prevent default form submission
        e.preventDefault()

        if(!firstname) {
            console.log("add firstname")
            setErrmsg("Please provide firstname")
        
        }
        else if(!lastname){
            console.log("add lastname")
            setErrmsg("please provide lastname")
        }

        else if(!password){
            console.log("add password")
            setErrmsg("please provide password")
        }

        else{
            setErrmsg('')
            // sumbit fom
            console.log("form submitted")
        }
            
        

    }

    


  return (
    <div className="flex justify-center items-center mx-auto flex-col w-full h-full">

      <form  onSubmit={handleSubmit}>
        {err && ( <p className='bg-red-600 text-white rounded-md px-4 text-center  '>{err}</p>)}
       
            <label htmlFor="" className="text-2xl">Firstname</label>
        <div className="w-full border-1 border-white my-3">
            <input onChange={(e)=> setFirstname(e.target.value)} type="text" className='outline-none  pt-3 px-4 w-full' />
        </div>
            <label htmlFor="" className="text-2xl">Lastname</label>
        <div className="w-full border-1 border-white my-3">
            <input onChange={(e)=> setLastname(e.target.value)} type="text" className='outline-none  pt-3 px-4 w-full' />
        </div>
            <label htmlFor="" className="text-2xl">Password</label>
        <div className="w-full border-1 border-white my-3">
            <input onChange={(e)=> setPassword(e.target.value)} type="text" className='outline-none  pt-3 px-4 w-full' />
        </div>

        <button className="bg-green-400 txt-white px-4 py-2 mx-auto">Submit </button>
      </form>


    </div>
  )
}

export default page
