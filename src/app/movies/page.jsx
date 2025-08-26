"use client"
import { getTop } from '@/lib/fetch'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [animes, setAnimes] = useState(null)

    const getTopAnimie = async () => {
        const data = await getTop('anime')
        console.log(data)
        setAnimes(data.data)

    }

    useEffect(() => {
        getTopAnimie()

    }, [])




    return (

        <div className="grid grid-cols-5 grid-row-5 gap-5 ">
            {
                animes ? 
                animes.map((anime) => (
                    <div className="border border-white rounded-md relative h-60 w-60 bg-red-500 bg-cover bg-center bg-no-repeat ">

                        {/* <Image width={500} height={500} src={data.} alt='image tilte' className='w-full h-full bg-cover' /> */}
                        <p className='absolute bottom-5 left-3 underline'>{data.title}</p>
                    </div>
                )) : "loadin...."
            }


        </div>
    )
}

export default page
