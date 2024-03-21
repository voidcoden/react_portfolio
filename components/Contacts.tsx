import React from 'react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-20 xl:py-28 border-2 border-green-500 h-dvh mt-20h-screen justify-center">
    <div className="relative z-20 flex flex-col border-2 border-green-500">
        <div className="bg-green-80 relative mt-10 z-10 shadow-hardShadowRight py-10">
            <h1 className="text-center bold-32 sm:bold-64 xl:bold-128 ">
                Get In Touch
            </h1>
        </div>
    </div>

    <div className="relative flex flex-col border-2 border-blue-500">
        <div className="bg-green-70 relative z-10 shadow-hardShadowLeft py-10">
            <p className="bold-20 text-center sm:bold-24 xl:bold-32">
            azman.syafiq01@gmail.com
            </p>
        </div>
    </div>
</section>
  )
}

export default Contacts