import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col gap-6 items-center justify-center py-4 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32  bg-white text-center mb-8'>
          <h1 className='font-bold text-[25px] md:text-[50px] line-height-tight mb-4'>
              <span className='text-[#02505a]'>
              Build Hi-Tech Products & Enterprise <br /> Apps
              </span>
              <br />
      With Instant Agentic AI & AI Agents</h1>
      <p className='text-[#000] line-height[28px] md:font-bold'>Join our global enterprise customers to build your AI-powered B2B, B2C and <br />
              D2C products and platforms.</p>    
          
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <li className="bg-[#1d646d] rounded py-2 md:py-4 px-4 md:px-5 flex items-center justify-center gap-2 text-white">
              <Image src="/assets/faster.svg" alt="Faster" width={30} height={30} />
              <p className='font-bold'> Faster Time to Market</p>
            </li>
            <li className="bg-[#1d646d] rounded py-4 px-5 flex items-center justify-center gap-2 text-white">
            <Image src="/assets/cloud.svg" alt="Cloud" width={30} height={30} />
                <p className='font-bold'> Private Cloud</p>
              </li>
            <li className="bg-[#1d646d] rounded py-4 px-5 flex items-center justify-center gap-2 text-white">
                  <Image src="/assets/storage.svg" alt="Storage" width={30} height={30} />
                  <p className='font-bold'>On Premise</p>
              </li>
            <li className="bg-[#1d646d] rounded py-4 px-5 flex items-center justify-center gap-2 text-white">
                  <Image src="/assets/secured.svg" alt="Secured" width={30} height={30} />
                  <p className='font-bold'>00% Secured</p>
              </li>
            <li className="bg-[#1d646d] rounded py-4 px-5 flex items-center justify-center gap-2 text-white">
                  <Image src="/assets/stamp.svg" alt="STAMP" width={30} height={30} />
                  <p className='font-bold'>Own Your Data and IP</p>
              </li>
              <li className="bg-[#1d646d] rounded py-4 px-5 flex items-center justify-center gap-2 text-white">
                  <Image src="/assets/developers.svg" alt="DEVELOPERS" width={30} height={30} />
                  <p className='font-bold'>Our Full Stack Team</p>
              </li>
          </ul>
    </section>
  )
}

export default Hero
