
"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const router=useRouter()
    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [password, setPassword]=useState('')
    const [err, setErrmsg]= useState('')
    const [loading,setLoading]=useState(false)



    // function to handle submit
    const handleSubmit=async (e)=>{
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
            setLoading(true)
            setErrmsg('')
            // send form data to api

            const res=await fetch('api/signup', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({firstname,lastname,password})

            })
            // const data=await res.json()
            if(res.ok){
                // route the user to login page
                router.push('/login')
            }
            
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

        <button disabled={loading? true :false} className={` ${loading?'bg-green-300 text-black' :'bg-green-500'} text-white px-4 py-2 mx-auto `}>   {loading ? (<span className='font-bold'>loading..</span>) : "Submit"} </button>
       
      </form>


    </div>
  )
}

export default page
