import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
<<<<<<< HEAD
import { DoctorContext} from '../context/DoctorContext'
=======
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken,setAToken} = useContext(AdminContext)
<<<<<<< HEAD
    const {dToken, setDToken} = useContext(DoctorContext)
=======
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    const navigate = useNavigate()


    const logout = ()  => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
<<<<<<< HEAD
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
=======
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    }
  return (
   <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white' > 
    <div className=' flex items-center gap-2 text-xs'>
<<<<<<< HEAD
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo}></img>
=======
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo}></img>
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
    </div>
    <button onClick={logout} className='bg-blue-500 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
   </div> 
  )
} 

export default Navbar