import React from 'react'

const TechStack = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20 border-2 border-green-500 mt-20h-screen justify-center">
      <div>
        <h1 className='bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
          Techstack
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className="max-container flex flex-col xl:flex-row border-2 px-10 border-green-500 ">

          <div className="bg-green-80 shadow-hardShadowLeft p-5 relative xl:w-[400px] mt-5 mr-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">FrontEnd</h2>
          </div>

          <div className="bg-green-60 shadow-hardShadowRight p-5 relative xl:w-[1100px] mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-40">Javascript, Typescript, HTML, CSS, Tailwind, Figma, Next.js, </h2>
          </div>

        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className="max-container flex flex-col xl:flex-row border-2 px-10 border-green-500 ">

          <div className="bg-green-80 shadow-hardShadowLeft p-5 relative xl:w-[400px] mr-5 mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">BackEnd</h2>
          </div>

          <div className="bg-green-60 shadow-hardShadowRight p-5 relative xl:w-[1100px] mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-40 pb-5">Node JS, Django, IndexedDB, Express, Git, MongoDB</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TechStack;