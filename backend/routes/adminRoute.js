import express from 'express'
<<<<<<< HEAD
import  {addDoctor,allDoctors,loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard}  from '../controllers/adminController.js'
=======
import  {addDoctor,allDoctors,loginAdmin}  from '../controllers/adminController.js'
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
<<<<<<< HEAD
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/dashboard", authAdmin, adminDashboard)
=======

>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
// upload.single is a middleware

export default adminRouter;