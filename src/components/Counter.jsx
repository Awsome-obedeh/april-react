import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const Counter = () => {
    const [value,setValue]=useState(0)
    const [show,setShow]=useState(true)

   function handleIncreament(){
    setValue(value+1)
   }

   function handleReset(){
    setValue(0)
   }

   function handleDecrement(){
    setValue(value-1)
   }

   function hanldeShow(){
    setShow(!show)
   }
  return (
    <div>
      <div className='flex gap-3 items-center'>
        <button onClick={handleDecrement} className="bg-red-600 text-white p-3">-</button>
        <p>{value}</p>
        <button onClick={handleIncreament} className="bg-green-600 text-white p-3">+</button>
        <button onClick={handleReset} className="bg-gray-700 text-black p-4">Reset</button>
      </div>


      <form action="" className='w-70 h-40 bg-gray-500 p-3 mx-auto'>
        <div className='w-full border-1 border-white flex items-center' >
        <input type={show ? 'password' : "text"} className=' w-full outline-none'  />

        {
            show ? (<FaEyeSlash onClick={hanldeShow}/> ) : (<IoEyeSharp onClick={hanldeShow} />)
        }
        
        

        </div>
      </form>
    </div>
  )
}

export default Counter
