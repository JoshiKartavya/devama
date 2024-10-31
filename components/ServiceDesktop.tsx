import React from 'react'
import { services } from '@/data'

const ServiceDesktop = () => {
  return (
    <div className=' hidden xl:block'>
      <div id='about' className='flex flex-col justify-start items-center h-screen gap-12'>
        <div className='w-full lg:w-[90vw] xl:w-[90vw] h-[80vh] lg:h-[70vh] xl:h-[70vh] rounded-2xl border-slate-800 border-2 border-b-0 flex flex-col lg:flex-row xl:flex-row justify-between items-center py-8 gap-8 lg:gap-0 xl:gap-0 lg:py-0 xl:py-0 px-4 lg:px-16 xl:px-16 lg:mt-8 xl:mt-8' 
            style={{
                background:"rgb(4,7,29)",
                backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            }}>
              {services.map((service)=>(
                <div key={service.id}>
                  <p>{service.number}</p>
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              ))}
        </div>
    </div>
    </div>
  )
}

export default ServiceDesktop
