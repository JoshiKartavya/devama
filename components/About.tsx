import Image from 'next/image'
import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const About = () => {
  const downloadCV = (() => {
    const cvUrl = '/DevamAminCV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'DevamAminCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  return (
    <div id='about' className='flex flex-col justify-start items-center h-screen gap-12'>
      <h1 className='text-4xl lg:text-7xl font-bold text-[#d9d9d9]'>
        A section <span className='text-purple'>About me</span>
      </h1>
      <div
        className='w-full lg:w-[90vw] xl:w-[90vw] h-[80vh] lg:h-[70vh] xl:h-[70vh] rounded-2xl border-slate-800 border-2 border-b-0 flex flex-col lg:flex-row xl:flex-row justify-between items-center py-8 gap-8 lg:gap-0 xl:gap-0 lg:py-0 xl:py-0 px-4 lg:px-16 xl:px-16'
        style={{
          background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
        }}
      >
        <div className="image relative h-[300px] lg:h-[400px] xl:h-[400px] w-[225px] lg:w-[300px] xl:w-[300px]">
          <Image className=' object-cover' src="/download.jpg" alt='profile' fill />
        </div>
        
        <div className="content flex flex-col h-[50vh] md:items-center xl:items-start justify-start gap-6 lg:gap-0 xl:gap-0 lg:justify-evenly xl:justify-evenly items-start w-full px-4 lg:w-[55vw] xl:w-[55vw]">
          <p className='text-xs lg:text-lg xl:text-lg font-light'>( About me )</p>
          <h1 className='text-xl lg:text-4xl xl:text-4xl font-semibold text-left xl:text-left md:text-center'>
            Hi, I&apos;m <span className='text-purple'>Danial smith</span>, a 20-year-old cybersecurity expert based in London specializing in network security and ethical hacking.
          </h1>
          <MagicButton title="My CV" icon={<FaLocationArrow />} position="right"/>
        </div>
      </div>
    </div>
  )
}

export default About
