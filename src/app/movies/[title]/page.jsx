"use client"
import { getAnime } from '@/lib/fetch'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AnimeSinglepage = () => {
    const params=useParams()
   const animeTitle=params.title
    const [currPage,setCurrPage]=useState(1)
    const  [animes, setAnimes]=useState(null)

    const getSingleAnime= async ()=>{
      const data= await getAnime(animeTitle,currPage)
      console.log(data.data)
      // setAnimes(data)
    }

    useEffect(()=>{
      getSingleAnime()
    }, [animeTitle, currPage])

  return (
    <div>
        <h1>Hiii, welcome to anime single page</h1>
        

          {
            animes && (
              
              <Image  src={animes.images.jpg.image_url} width={400} height={400} alt='images'/>
            )
          }  

         
    </div>
  )
}

export default AnimeSinglepage
