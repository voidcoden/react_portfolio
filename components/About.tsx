import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 bg-black mt-20h-screen justify-center">
      <div>
        <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
          About Me
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className="max-container flex flex-col xl:flex-row px-10 ">
          <div className="relative w-full p-5 border-red-500">
            <Image 
              src = "/myphoto.png"
              alt = "myphoto"
              width={1000}
              height={1000}
              className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
            />
          </div>

          <div className="bg-green-60 shadow-hardShadowWhite p-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">Greetings!</h2>
            <p className="regular-16 lg:regular-24 xl:regular-28">
              I&apos;m a dedicated full stack and game developer based in Selangor, Malaysia. I&apos;m passionate about constantly improving my skills in programming.   
            </p>
            <br></br>
            <p className="regular-16 lg:regular-24 xl:regular-28">
              When I&apos;m not coding, you can find me immersed in books, gaming, or hitting the gym. I&apos;m always eager to explore new opportunities and collaborate with others in the tech and gaming community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About