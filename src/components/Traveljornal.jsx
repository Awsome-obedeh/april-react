import Image from 'next/image'
import React from 'react'

const travelPlans = [
    {
        id: 1,
        cityImg: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Japan",
        city: "shibuya",
        desc: "Get immersed in the rich culture of japan",
        year: 2026

    },
    {
        id: 3,
        cityImg: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/",
        country: "France",
        city: "pairis",
        desc: "Find your disired desire in the city of love",
        year: "2027"
    },
    {
        id: 4,
        cityImg: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/",
        country: "France",
        city: "pairis",
        desc: "Find your disired desire in the city of love",
        year: "2027"
    },
    {
        id: 5,
        cityImg: "https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "USA",
        city: "las vegas",
        desc: "Welcome to sin city",
        year: "2027"
    },
    {
        id: 6,
        cityImg: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Nigeria",
        city: "Lagos",
        desc: "Find your passionn in the bustling and busy city of lagos. Do well to shine your eyes, This is lagos",
        year: "2025"
    },
]

const Traveljornal = () => {
    return (

        <>

            <h1 className='bg-pink-500 text-white text-center text-2xl'> My travel journal</h1>

            {
                travelPlans.map(plan => (
                    <div className='flex gap-3' key={plan.id}>
                        <Image src={plan.cityImg} width={400} height={300} className='h-20  w-20' />

                        <div className="flex flex-col gap-3">
                            <h3>{plan.country}</h3>
                            <p>{plan.city}</p>
                            <p>{plan.desc}</p>
                            <small>Year:{plan.year}</small>
                        </div>
                    </div>
                ))
            }

        </>

    )
}

export default Traveljornal
