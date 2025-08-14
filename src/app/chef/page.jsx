
"use client"
import React, { useState } from 'react'

const page = () => {
    const [recipe, setRecipe]= useState([])
    const [ingredient,setIngredient]=useState('')

   

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("clicked")

        setRecipe(prev=>([
            ...recipe, ingredient
        ]))

        


    }

    console.log(recipe)
  return (
    <div>
      <nav className="shadow shadow-gray-500 mx-auto text-center">Chef claude</nav>

      <form onSubmit={handleSubmit}   className='flex justify-center m-6 w-full'>
        
        <input onChange={(e)=>setIngredient(e.target.value)} className="px-2 border-1 w-60" placeholder="onion, seasoning" /> <button type="submit" className='bg-white text-black px-5 py-2 rounded-md mx-4'>Add ingredient</button>
      </form>

      <div className='flex justify-center'>

        <ul>
        <h3>ingredients on hand</h3>
        {
           recipe.map((data)=>(
               <li className='flex justify-center'>{data} <span className='bg-gray-400 rounded-sm gap-3 px-2 text-black mx-5'>x</span></li>

           ))

        
        }
        </ul>
      </div>
  

    </div>
  )
}

export default page
