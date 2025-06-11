import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className='flex flex-col gap-8 justify-center mb-8 py-4 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32'>
          <p className='text-[20px] text-center'>Trusted by Funded Startups to <span className='text-[#108b47]'>Fortune 500+ Brands</span> in 12+ Countries</p>
          <Image
            src="/assets/our-clients-mobile.webp"
            alt="Brands"
            width={1200}
            height={200}
            className="w-full h-auto object-contain"
          />
    </section>
  )
}

export default Banner
