import React from 'react'

const Request = () => {
  return (
    <section className='py-8 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center mb-8'>
          <div className='flex flex-col items-center justify-center md:flex-row gab-4 md:gap-12 bg-[#01403d] text-white p-6 md:p-8 lg:p-16 xl:p-24 2xl:p-32 rounded-lg shadow-lg'>
              
              <h2 className='mb-4 text-[16px] md:text-[29px] font-semibold'>Ready to See the Results? <br /> Start Your PoC Now!</h2>  
              <div>
          <button className="bg-[#FF6900] text-white text-[14px] py-2 px-4 rounded-md hover:bg-[#FF6900] transition duration-300 min-w-[250px] font-semibold">
            Request Your PoC Today
                  </button>
                  <p className='font-semibold hidden md:block'>Today!</p>
              </div>    
          </div>
    </section>
  )
}

export default Request
