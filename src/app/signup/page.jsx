

import AnthonyNotifications from '@/components/AnthonyNotifications'
import Notifications from '@/components/Notifications'
import { handleSubmit } from '@/lib/action'


import React from 'react'

export default function SignUp() {


  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="">firstname</label>
        <input className='block mt-4 mb-3 border-1 border-white' type="text" name="firstname" />


        <label htmlFor="">lastname</label>
        <input className='block  mb-3 border-1 border-white' type="text" name="lastname" />


        <label htmlFor="">age</label>
        <input className='block mt-4 mb-3 border-1 border-white' type="number" name="age" />



        <label htmlFor="sex">Male</label>
        <input className="block mb-2" type="checkbox" name="male" value="male" id="sex" />
        <label htmlFor="sex">female </label>
        <input className="block mb-2" type="checkbox" name="female" value='female' id="sex" />

        <label htmlFor="firstoption">Value of 2*2</label>
        <label htmlFor="firstoption" className='block'>1</label>
        <input type="radio" className='block' name="answer" id="firtoption" value="1" />

        <label htmlFor="secondoption">3</label>

        <input className="block" type="radio" name="answer" id="secondoption" value="3" />

        <label htmlFor="thirdoption">4</label>

        <input className="block" type="radio" name="answer" id="thirdoptio" value="4" />

        {/* tasks 
        
        1) what is the value of 2*2 give 4 option using a radio button with on correct answer and one wrong answer 
        
        2) Manchester vs fulham 
        a) mount
        b) chuna
        c)bassey
        d)mbuemmo
        
        3) using a textarea write a short description about your self
        
        4) i want a user to select his ir her state of origin- in a selcect input.
        add 5 states in nigeria as options
        */}

        <div>
          <label htmlFor="">Bassey</label>
          <input type="checkbox" name="players" value="bassey" />
        </div>
        <div>
          <label htmlFor="">mount</label>
          <input type="checkbox" name="players" value="mount" />
        </div>
        <div>
          <label htmlFor="">mbeummo</label>
          <input type="checkbox" name="players" value="mbeummo" />
        </div>
        <div>
          <label htmlFor="">chuna</label>
          <input type="checkbox" name="players" value="chuna" />
        </div>


        <button type='submit' className='bg-green-500 text-white'>Submit</button>
      </form>

      <Notifications />
    </div>
  )
}
