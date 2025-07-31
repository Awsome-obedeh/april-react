import React from 'react'
import { FaThumbsUp } from "react-icons/fa";

const Jokes = (props) => {
  return (
    <div>
      <div className="border-1  border-white rounded-md p-3">
        <h1>Setup: {props.setup} </h1>
        <p>punchline: {props.punchline}</p>
        <p className="flex items-center"><FaThumbsUp/>: {props.upvote}</p>

        {/* {   condtional rendering using && */}
            {/* // props.author && ( <span>author: {props.author}</span>) */}
        {
            props.author ? (<span>author: {props.author}</span>) : <p>Someone else</p>
        }
       
      </div>
    </div>
  )
}

export default Jokes
