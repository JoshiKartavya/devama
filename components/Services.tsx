import React from 'react'
import ServiceDesktop from './ServiceDesktop'

const Services = () => {
  return (
    <div id='services' className='flex flex-col justify-center items-center h-max'>
      <h1 className=' text-4xl lg:text-7xl xl:text-7xl font-bold text-[#d9d9d9] text-center mb-8 lg:mb-0 xl:mb-0'>What services <span className='text-purple'>do i provide?</span></h1>
      <ServiceDesktop />
    </div>
  )
}

export default Services
