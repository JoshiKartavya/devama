import React from 'react'
import ServiceDesktop from './ServiceDesktop'
import ServiceMobile from './ServiceMobile'

const Services = () => {
  return (
    <div id='services' className='flex flex-col justify-center items-center h-max'>
      <h1 className='text-7xl font-bold text-[#d9d9d9]'>Area of<span className='text-purple'>Experties</span></h1>
      <ServiceDesktop />
      <ServiceMobile />
    </div>
  )
}

export default Services
