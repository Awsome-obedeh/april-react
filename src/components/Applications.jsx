const applicants = [
  {
    name: 'Joe', 
    work: 'freelance-developer',
    blogs: '54',
     websites: '32',
    hackathons: 'none', 
    location:  'Morocco', 
    imageUrl:"/img (3).jpg",
    id: '0',

  },
  {
    name: 'Janet', 
    work: 'fullstack-developer',
    blogs: '34', 
    websites: '12',
    hackathons: '6',
     location: 'Mozambique', 
     imageUrl:"/img (2).jpg",
     id: '1',

  },
  {
    name: 'John',
     work: 'Virtual Assistant',
    blogs: '24',
     websites: '10',
    hackathons: '6', 
    location: 'Nigeria',
    imageUrl:"/img (3).jpg",
     id: '2',

  },
  {
    name: 'Aaron',
     work: 'Graphics designer',
    blogs: '14',
     websites: '5',
    hackathons: '6', 
    location: 'Ethopia',
    imageUrl:"/img (4).jpg",
     id: '3',

  },

];

import React from 'react'
import ApplicantCard from './ApplicantCard';

const Applications = () => {
  return (
    <div className="flex gap-5">
      {applicants.map(applicant=>(
        <ApplicantCard applicant={applicant}/>
      ))}
    </div>
  )
}

export default Applications

