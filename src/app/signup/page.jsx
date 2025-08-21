

import Notifications from '@/components/Notifications'
import { handleSubmit } from '@/lib/action'
import React from 'react'

export default function SignUp() {

   
  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="">firstname</label> 
        <input className='border-1 border-white' type="text" name="firstname" />
        <label htmlFor="">lastname</label> 
        <input className='border-1 border-white' type="text" name="lastname" />
        <label htmlFor="">age</label> 
        <input className='border-1 border-white' type="number" name="age" />

        <label htmlFor="sex">Male</label>
        <input type="checkbox" name="male" value="male" id="sex" />
        <label htmlFor="sex">female </label>
        <input type="checkbox" name="female" value='female' id="sex" />

        {/* tasks 
        
        1) what is the value of 2*2 give 4 option using a radio button with on correct answer and one wrong answer 
        2) Manchester vs fulham 
        a) mount
        b) chuma
        c)bassey
        d)mbuemmo
        
        3) using a textarea write a short description about your self
        
        4) i want a user to select his ir her state of origin- in a selcect input.
        add 5 states in nigeria as options
        */}

        <button type='submit' className='bg-green-500 text-white'>Submit</button>
      </form>

      <Notifications/>
    </div>
  )
}
