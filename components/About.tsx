import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 bg-black mt-20h-screen justify-center">
      <div>
        <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
          About Me
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

          <div className="bg-green-60 shadow-hardShadowWhite p-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">Greetings!</h2>
            <p className="regular-16 lg:regular-24 xl:regular-32">
              I am a full stack developer, and game developer based in Selangor, Malaysia &#128522;. I am passionate in catering my works in becoming a better full stack programmer.  
            </p>
            <br></br>
            <p className="regular-16 lg:regular-24 xl:regular-32">
              During my free time, I enjoy reading, playing games, working out &#129495;.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About