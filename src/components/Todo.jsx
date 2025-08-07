import React, { useState } from 'react'
  import { FaCheck } from "react-icons/fa";

const Todo = () => {
    // use state to define our task properties
    const [tasks, setTasks] = useState([])

    const handleSubmit = (e) => {
        // prevent the form default submission
        e.preventDefault()
        console.log(e)
        const newTask = e.target[0].value
        console.log(newTask)
        // add the new value of task to the tasks array
        setTasks([...tasks, newTask])
       

    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h3 className="text-2xl">Plan your day</h3>

                <div className="border rounded-md">
                    <input type="text" placeholder='Add your task' className='w-full' />
                    <input type="time" />
                </div>
                <button className='bg-blue-500 px-4 py-2 mx-auto block mt-3 rounded-sm text-white'>Add</button>
            </form>

            <h2 className='text-center'>Task to do</h2>
            <div className="flex justify-center bg-blue-300 p-4 flex-col gap-3 items-center">

                {
                    // display all tasks in the tasks use state
                      tasks.map(task => (
                        <p key={task} className="bg-gray-400 px-3 py-2 w-max flex flex-col items-center">
                            {task}

                        <FaCheck />
                        </p>
                    ))
                }

            </div>
        </div>
    )
}

export default Todo
