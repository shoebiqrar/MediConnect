import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const  AdminContext = createContext()

const AdminContextProvider = (props) => {
     
   const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [doctors, setDoctors] = useState([])
<<<<<<< HEAD
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL
 
=======
    const backendUrl = import.meta.env.VITE_BACKEND_URL

>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    const getAllDoctors = async () => {
        try {
            
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors',{}, {headers:{aToken}})
            if(data.success) {
                setDoctors(data.doctors)
<<<<<<< HEAD
                //  console.log(doctors)
=======
                // console.log(doctors)
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
            }  else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

<<<<<<< HEAD
    const getAllAppointments = async () => {
         try {
             
              const {data} = await axios.get(backendUrl+'/api/admin/appointments', {headers:{aToken}})
              
              if(data.success) {
                setAppointments(data.appointments)
               console.log(data)
              } else {
                toast.error(data.message) 
              }
         } catch (error) {
            toast.error(error.message)
         }
    }

=======
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    const changeAvailability  = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl+ '/api/admin/change-availability', {docId}, {headers:{aToken}})
            if(data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

<<<<<<< HEAD
    const cancelAppointment = async (appointmentId) => {
             try {
                   const {data} = await axios.post(backendUrl+'/api/admin/cancel-appointment', {appointmentId}, {headers:{aToken}})

                    if(data.success) {
                        toast.success(data.message)
                        getAllAppointments()
                    } else {
                        toast.error(data.message);
                    }
             } catch (error) {
                toast.error(error.message)
             }
    }

    const getDashData = async () => {
        try {
           const {data} = await axios.get(backendUrl+ '/api/admin/dashboard', {headers: {aToken}})

           if(data.success) {
            setDashData(data.dashData)
           } else {
            toast.error(data.message)
           }

        } catch (error) {

        }
    }
 
    const value = {
        aToken,setAToken,
        backendUrl,doctors,getAllDoctors, changeAvailability, appointments,setAppointments,getAllAppointments,cancelAppointment, dashData, getDashData
=======
    const value = {
        aToken,setAToken,
        backendUrl,doctors,getAllDoctors, changeAvailability
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider