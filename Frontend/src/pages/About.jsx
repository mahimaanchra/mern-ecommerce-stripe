import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'> 
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, eligendi iusto. Sapiente quidem, quos distinctio nobis neque quae, accusamus fugiat nihil et omnis voluptate placeat voluptatem nemo amet ad non.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ad nisi perspiciatis, assumenda non impedit voluptates minima ullam exercitationem, blanditiis cumque velit temporibus mollitia natus. Laudantium eaque sed quae autem.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eius eos saepe quisquam? Corporis hic magni, esse dignissimos libero incidunt maiores quibusdam laudantium. Consectetur itaque quisquam harum deserunt commodi fugiat.</p>
       </div>
      </div>

      <div className='text-xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-10'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium dolorum. Repudiandae, culpa soluta, ea, neque cum animi aspernatur perferendis officiis fugit iste commodi? Illo consequuntur quod natus voluptatum perferendis!</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium dolorum. Repudiandae, culpa soluta, ea, neque cum animi aspernatur perferendis officiis fugit iste commodi? Illo consequuntur quod natus voluptatum perferendis!</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium dolorum. Repudiandae, culpa soluta, ea, neque cum animi aspernatur perferendis officiis fugit iste commodi? Illo consequuntur quod natus voluptatum perferendis!</p>
       </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
