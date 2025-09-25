"use client"
import { getTop } from '@/lib/fetch'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const page = () => {

    const session = useSession()
    const router = useRouter()




    const [animes, setAnimes] = useState(null)

    const getTopAnimie = async () => {
        const data = await getTop('anime')
        console.log(data)
        setAnimes(data.data)

    }

    useEffect(() => {
        getTopAnimie()

    }, [])
    if(session.status=="loading"){
        return (<p>Loading...</p>)
    }

    if (session?.status == "authenticated") {
        return (

            <div className="grid grid-cols-5 grid-row-5 gap-5 ">
                {
                    animes ?
                        animes.map((anime) => (
                            <>
                                <Link href={`/movies/${anime.title}`} key={anime.title} className="border border-white rounded-md relative h-30 w-60 bg-red-500 bg-cover bg-center bg-no-repeat ">

                                    <Image width={500} height={200} src={anime.images.jpg.image_url} alt='image tilte' className='w-full h-full bg-cover' />
                                    <p className='absolute bottom-5 left-3 underline'>{anime.title}</p>
                                </Link>
                                <p className='w-60'>{anime.synopsis?.slice(0, 50)}....</p>
                            </>
                        )) : "loadin...."
                }


            </div>
        )
    }

    else {
        return (router.push('/login'))

    }



}

export default page
