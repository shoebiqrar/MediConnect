import { createContext } from "react";

export const  AppContext = createContext()

const AppContextProvider = (props) => {
     
<<<<<<< HEAD
         const currency = '$'

    const calculateAge = (dob)=> {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
         return age
    }
   
    const months = ["", "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }



    const value = {
         calculateAge,
         slotDateFormat, 
         currency
    }

=======
    const value = {
        
    }
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

<<<<<<< HEAD
export default AppContextProvider 
=======
export default AppContextProvider
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
