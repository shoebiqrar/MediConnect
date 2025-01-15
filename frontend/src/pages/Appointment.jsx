import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useState } from 'react'
import RelatedDoctor from '../components/RelatedDoctor'

const Appointment = () => {
    const {docId} = useParams()
    const {doctors,currencySymbol} = useContext(AppContext)
    const daysOfWeek = ['MON', 'TUES', 'WED', 'THR', 'FRI','SAT','SUN'];

    const [docInfo, setDocInfo] = useState(null)
    const [docSlots,setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime,setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id == docId)
        setDocInfo(docInfo)
    }

    const getAvailableSlots = async () => {
        setDocSlots([])
        
        //getting current Date
        let today = new Date();     //inside today we will get today date, time and more 
        for(let i=0; i< 7; i++) {
            //getting date with index
            let currentDate = new Date(today)    // we are creating a copy copy of today object and store it in currentDate
            currentDate.setDate(today.getDate()+i)  // inside currentDate we are setting the updated date 

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate()+i)
            endTime.setHours(21,0,0,0)    //We use endTime.setHours(21, 0, 0, 0) to set the end time for each day as 9:00 PM (21:00:00),

            //setting hours
            if(today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0 )
            }  else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
           let timeSlots = []

            while( currentDate < endTime ) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

             // add slot to array
              timeSlots.push({
                datetime: new Date(currentDate),
                time: formattedTime
              })

              //Increment time by 30 minutes
              currentDate.setMinutes(currentDate.getMinutes() + 30 )
            }
            setDocSlots(prev => ([...prev, timeSlots]))
        }   
    }  
            



   useEffect(()=> {
    fetchDocInfo()
   },[doctors,docId]
   )

   useEffect(() => {
    if (docId) {
        getAvailableSlots();
    }
}, [docId]);


   useEffect(()=> {
    console.log(docSlots);
   },[docSlots]
   )



  return docInfo && (
    <div>
    {/* Doctors details */}
    <div className='flex flex-col sm:flex-row gap-4'>
        <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image}></img>
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0  sm:mt-0'>
            {/* Doc Info : name image experience */}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                {docInfo.name}
                <img className='w-5 ' src={assets.verified_icon} alt=""></img>
                </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-6oo'>
                <p>{docInfo.degree} - {docInfo.speciality}</p>
                <buttton className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</buttton>
            </div>
            {/* doctor About */}
            <div>
                <p className='flex items-center gap-sm font-medium text-gray-900 mt-3'>
                  About<img src={assets.info_icon} alt=""></img>
                </p>
                <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
                Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
        </div>
    </div>
    {/* booking slots */}
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
     <p>Booking Slots</p>
     <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
        {
        docSlots.length && docSlots.map((item,index)=>(
        <div onClick={()=> setSlotIndex(index)}  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
        ))
    }
     </div>
    <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map((item, index)=>(
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}
            </p>
        ))}
    </div>
    <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
    </div>
    {/* listing related Doctors */}
    <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment