import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 bg-black mt-20h-screen justify-center">
    <div>
      <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
        Projects
      </h1>
    </div>
    <div className="flex flex-wrap items-center border-2 border-green-500 justify-center">
      <div className="m-6 p-0 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-2 border-red-500">
        <div className="flex-col">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="flex-col">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="flex-col">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
          />
        </div>
        <div className="flex-col">
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