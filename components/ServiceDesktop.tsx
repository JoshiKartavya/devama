import React from 'react';
import { services } from '@/data';
import './ServicesDesktop.scss';
import Image from 'next/image';
import { Button } from './ui/MovingBorders';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const ServiceDesktop = () => {
  return (
    <div className='hidden xl:block'>
      <div id='services' className='flex flex-col justify-start items-center w-[100vw] h-[100vh] px-12 py-10 gap-12'>
        <div className="services w-full h-[80vh] px-12 py-10 flex flex-row justify-between items-center">
          {services.map((service) => (
            <div key={service.id} className="service ser1 w-[30%] lg:w-[30%] xl:w-[30%] h-[80vh] lg:h-[85vh] xl:h-[70vh] rounded-2xl border-slate-800 border-2 border-b-0 flex flex-col lg:flex-col xl:flex-col justify-start items-center gap-8 lg:gap-0 xl:gap-0 px-8 py-6"
              style={{
                background: 'rgb(4,7,29)',
                backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              }} >
              <div className="content w-full h-full flex flex-col gap-6 justify-start items-start">
                <h3 className='text-[#d9d9d9] text-lg border-[1px] rounded-xl border-[#d9d9d9] px-6 py-4'>${service.price}<span className='text-2xl'>+</span></h3>
                <h1 className='text-5xl font-semibold'>{service.title}</h1>
                <p className='text-[#d9d9d9] text-lg'>{service.description}</p>
                <div className="features w-full flex flex-col gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#d9d9d9] rounded-full"></div>
                      <p className="text-[#d9d9d9] text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
                <a href={service.link}  target="_blank" rel="noopener noreferrer"><MagicButton title="Read more" icon={<FaLocationArrow />} position="right"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDesktop;