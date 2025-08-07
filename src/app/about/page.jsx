
"use client"
import Counter from '@/components/Counter'
import Todo from '@/components/Todo'
import React, { useState } from 'react'

const AboutPage = () => {
    const [answer, setAnswer]=useState(false)
    console.log(answer)

    function handleClick(){
        // console.log("The button has been hovered")
        // chnage the value of answer
        setAnswer(!answer)
    }

  return (
    <div>
      {/* choose your answer */}

      <div className="mx-auto flex justify-center flex-col items-center">
        <h3>Are your enjounying React</h3>

        <p className=" flex items-center justify-center p-10 w-10 h-10 rounded-full bg-white text-black text-center">{answer ? "yes": "No"}</p>

        <button onClick={handleClick} className="bg-white px-10 mt-3 rounded-md py-2 text-black ">No</button>
      </div>

      <Counter/>
      <Todo/>
    </div>
  )
}

export default AboutPage
