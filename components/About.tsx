import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 bg-black h-dvh mt-20h-screen justify-center">
      <div>
        <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
          About Me
        </h1>
      </div>

      <div className="max-container flex flex-col md:gap-28 xl:flex-row border-2 px-10 border-green-500">
        <div className="relative w-full p-5 border-red-500">
          <Image 
            src = "/myphoto.jpg"
            alt = "myphoto"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>

        <div className="bg-green-60 shadow-hardShadowWhite p-5">
          <h2 className="bold-32 sm:bold-32 xl:bold-52">Greetings!</h2>
          <p className="regular-16 sm:regular-24 xl:regular-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <br></br>
          <p className="regular-16 sm:regular-24 xl:regular-32">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About