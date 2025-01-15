import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
              <img className='mb-5 w-40' src ={assets.logo}></img>
              <p className='w-full md:w-2/3 text-gray- leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid sed est eaque temporibus veniam alias. Minima quae nihil, ut consequuntur cum obcaecati magnam reiciendis similique perferendis suscipit amet accusantium?</p>
            </div>

            {/* center Section */}
            <div>
             <p className='text-xl font-medium mb-5'>Company</p>
             <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
             </ul>
            </div>

            {/* Right */}
            <div>
               <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600'>
                  <li>+1-2222-456-533</li>
                  <li>Shoebiqrar8@gmail.com</li>
               </ul>
            </div>
        </div>
        {/* copyrigth Text */}
        <div>
            <p className='py-5 text-sm text-center'>Copyright 2024@ prescripto All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer