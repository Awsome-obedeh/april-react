"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [memes, setMemes] = useState(null)
    const [randomIndex, setRandomIndex]=useState(0)

    const getMemes = async () => {
        const res = await fetch('https://api.imgflip.com/get_memes')
        // convert json to object for us to be able to use the data
        const data = await res.json()
        // store API response in the memes useState
        setMemes(data.data.memes)


    }
    // call the function- calling this function without wrapping it ina usefEffct 
    console.log("this is my memes state ", memes)
    memes
    // will cause an infinite loop
    useEffect(() => {
        getMemes()
    }, [])

    // function to create randomnumber aka random images
    const handleImages=()=>{
        const random=Math.floor(Math.random()*99)+1
        setRandomIndex(random)
    }

    


    // getMemes()
    if (memes=== null) {

        <p>Loading memes......</p>
        
    }
    else{
        
        const currentMeme=memes[randomIndex]
    return (


            <div>



                <div className=''>
                    <input placeholder='Before learning React' type="text" className='px-4 border-1 border-white py-4 outline:none' />
                    <input placeholder='After learning React' type="text" className='px-4 border-1 border-white py-4 outline:none' />
                </div>
                <div className='relative h-90 flex justify-center w-60'>
                    {/* <div className="w-full h-full absolute top-0 left-0 bg-gray-900 opacity-30 z-30"></div> */}
                    <Image priority alt="image header" height={400} width={500} src={currentMeme.url} className='h-full w-full absolute backdrop-blur-3xl' />
                    <h1 className='text-3xl absolute top-3 text-center'>Top text</h1>
                    <h2 className='text-3xl text-red-500 absolute bottom-3 text-center flex justify-center'>Bottom text</h2>
                </div>

                <button onMouseOut={handleImages} className="bg-green-700 px-5 py-4 rounded-md text-white mt-10">Generate Meme</button>

                <p>iMage no: {randomIndex}</p>




            </div>
        ) 
    }
   
}



export default page
