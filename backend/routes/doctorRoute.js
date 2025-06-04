import express from 'express'
<<<<<<< HEAD
import { doctorList, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard,doctorProfile, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
=======
import { doctorList } from '../controllers/doctorController.js'
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
<<<<<<< HEAD
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)
=======

>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
export default doctorRouter


