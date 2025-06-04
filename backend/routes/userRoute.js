import express from 'express'
<<<<<<< HEAD
import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, registerUser, updateProfile, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
=======
import { registerUser } from '../controllers/userController.js'
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c

const userRouter = express.Router()

userRouter.post('/register', registerUser)
<<<<<<< HEAD
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment-razorpay', authUser, paymentRazorpay)
userRouter.post('/verifyRazorpay', authUser, verifyRazorpay)
export default userRouter  
=======


export default userRouter
>>>>>>> d6b3eced8a5a1a0b4c95a379cd564575809c0a4c
