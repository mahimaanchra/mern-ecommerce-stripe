import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='my-10 mt-40'>
      {/* Container 1: The Three-Column Responsive Grid */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm mb-10'>
        
        {/* Column One: Brand Logo & Description */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odit a reprehenderit ad error voluptatibus, enim accusantium voluptatem hic aspernatur aut quam, velit sed eaque dolores possimus debitis, ipsum veniam.
            </p>
        </div>

        {/* Column Two: Menu Navigation Links */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>

        {/* Column Three: Contact Information */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1-212-456-7890</li>
              <li>contact@forever.com</li>
            </ul>
        </div>

      </div>

      <div>
          <hr className='border-gray-300' />
          <p className='py-5 text-sm text-center text-gray-600'>
            Copyright 2026 © forever.com - All Rights Reserved.
          </p>
      </div>
    </div>
  )
}

export default Footer