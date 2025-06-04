import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
<<<<<<< HEAD
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {
    const  {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)
=======

const Sidebar = () => {
    const  {aToken} = useContext(AdminContext)
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
  return (
    <div className='min-h-screen bg-white border-r'>
        {
            aToken && <ul className='text-[#515151] mt-5'>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
<<<<<<< HEAD
                <p className='hidden md:block'>DashBoard</p>
=======
                <p>DashBoard</p>
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
             </NavLink> 

               <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt="" />
<<<<<<< HEAD
                <p className='hidden md:block'>Appointments</p>
=======
                <p>Appointments</p>
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
             </NavLink> 

               <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}`} to={'/add-doctor'}>
                <img src={assets.add_icon} alt="" />
<<<<<<< HEAD
                <p className='hidden md:block'>Add Doctor</p>
=======
                <p>Add Doctor</p>
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
             </NavLink> 

               <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/doctor-list'}>
                <img src={assets.people_icon} alt="" />
<<<<<<< HEAD
                <p className='hidden md:block'>doctor List</p>
             </NavLink>    
            </ul>
        }
        {
            dToken && <ul className='text-[#515151] mt-5'>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/doctor-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p className='hidden md:block'>DashBoard</p>
             </NavLink> 

               <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/doctor-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p className='hidden md:block'>Appointments</p>
             </NavLink> 

               <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF border-r-4 bg-blue-100' : ''}` } to={'/doctor-profile'}>
                <img src={assets.people_icon} alt="" />
                <p className='hidden md:block'>Profile</p>
=======
                <p>doctor List</p>
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
             </NavLink>    
            </ul>
        }
    </div>
  )
}

export default Sidebar