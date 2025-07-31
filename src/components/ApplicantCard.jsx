import Image from 'next/image'
import React from 'react'
import { FaPenClip } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const ApplicantCard = (props) => {
  return (

    
    <div className="bg-white w-60 ">
      <div className="shadow-md ">
        <Image src={props.applicant.imageUrl} width={400} height={500} alt="image" className="w-60 h-40 rounded-lg p-2"/>

        <div>
            <p className="text-sm font-bold text-black">{props.applicant.name}</p>
            <span className="text-gray-500 text-sm">{props.applicant.work}</span>
        <div className="flex gap-4 text-black">
            <span className=" flex items-center text-gray-900 text-sm"><FaPenClip />: {props.applicant.blogs}</span>
            <span className=" flex items-center text-gray-900 text-sm"><TbWorld />:{props.applicant.websites}</span>
            <span className=" flex items-center text-gray-900 text-sm"><FaPenClip />: {props.applicant.location}</span>
            <span className=" flex items-center text-gray-900 text-sm"><FaPenClip />: {props.applicant.hackathon}</span>
        </div>
        </div>
      </div>
    </div>
  )

}

export default ApplicantCard
