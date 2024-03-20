import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 bg-black h-dvh mt-20h-screen justify-center">
    <div>
      <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
        Projects
      </h1>
    </div>
    <div className='flex justify-center items-center'>
      <div className="max-container flex flex-col xl:flex-row border-2 px-10 border-green-500 ">
        <div className="relative w-full p-5 border-red-500">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="relative w-full p-5 border-red-500">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="relative w-full p-5 border-red-500">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="relative w-full p-5 border-red-500">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects