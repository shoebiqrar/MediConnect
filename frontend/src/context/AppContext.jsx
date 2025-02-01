import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   
    const currencySymbol = '$'
    const backendUrl = import.meta.url.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])

    const value = {
        doctors, currencySymbol,getDoctorsData
    }

    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if(data.success) {
               setDoctors(data.doctors)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }    


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider


// Appcontext provider is used to send data to all components
