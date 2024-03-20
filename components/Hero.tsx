import React from 'react'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <div className="bg-green-60 relative z-10">
                <h1 className="bold-88 text-center">
                    Hi there, I&apos;m
                </h1>
                <p className="bold-88 text-center">Syafiq</p>
            </div>
            <div className="absolute top-3 right-3 w-full h-full bg-black z-0 lg:flex"></div>
        </div>
    </section>
  )
}

export default Hero