import React from 'react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-20 xl:py-28 border-2 border-green-500 h-dvh mt-20h-screen justify-center">
    <div className="relative z-20 flex flex-col border-2 border-green-500">
        <div className="bg-green-60 relative mt-10 z-10 p-1 shadow-hardShadowRight">
            <h1 className="text-center bold-32 sm:bold-64 xl:bold-128 ">
                Get In Touch
            </h1>
        </div>
    </div>

    <div className="relative flex flex-col border-2 border-blue-500">
        <div className="bg-green-70 relative z-10 pt-4 pb-4 shadow-hardShadowLeft">
            <p className="bold-20 text-center sm:bold-24 xl:bold-32">
            azman.syafiq01@gmail.com
            </p>
        </div>
    </div>
    <div className="relative h-16 w-32">
        <div className="absolute bottom-0 left-0 h-10 w-16">
            <Image 
                src="arrow.svg"
                alt="arrow"
                width={40}
                height={40}
                className="inline-block cursor-pointer "
            />
        </div>
    </div>
</section>
  )
}

export default Contacts