import React from 'react'
import SelectArea from '../Components/Screens/Desktop/SelectArea'
import Register from "../Components/Screens/Desktop/Register"

const LoginSignup = () => {
  return (
    <div className=' w-full bg-red-900 flex flex-col items-center justify-center'>
      <SelectArea />
      <Register/>
    </div>
  )
}

export default LoginSignup
