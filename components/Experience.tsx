import React from 'react'

const Experience = () => {
  return (
    <section className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20  mt-20h-screen justify-center">
      <div>
        <h1 className='bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
          Experience
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className="max-container flex flex-col xl:flex-row px-10 ">

          <div className="bg-green-80 shadow-hardShadowLeft p-5 relative xl:w-[400px] mt-5 mr-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">Work</h2>
          </div>

          <div className="bg-green-60 shadow-hardShadowRight p-5 relative xl:w-[1100px] mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-40">Colus Sdn Bhd</h2>
            <p className="regular-16 lg:regular-24 xl:regular-32">
              Full stack Developer Internship
              <span className="light-24"> July 2023 - Oct 2023 * 4 Months</span>
            </p>
            <br></br>

            <ul className="list-disc pl-5">
              <li className="regular-24">Web application Development (Electron, Phaser, IndexedDB)</li>
            </ul>

            <br></br>
            <p className="light-20 lg:light-20 xl:light-20">
              Full stack Developer for Colus sdn bhd where I as the developer have to apply my knowledge in both game development specialization and my web development background to create a web game for education use. I was tasked to do the fronted and backed for the leader board UI/UX and the database to store the player’s data .
            </p>
          </div>

        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className="max-container flex flex-col xl:flex-row px-10">

          <div className="bg-green-80 shadow-hardShadowLeft p-5 relative xl:w-[400px] mr-5 mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-52 pb-5">Education</h2>
          </div>

          <div className="bg-green-60 shadow-hardShadowRight p-5 relative xl:w-[1100px] mt-5">
            <h2 className="bold-20 lg:bold-32 xl:bold-40 pb-5">BSc (Hons) of Computer Science with Specialization in Game Development</h2>
            <p className="regular-16 lg:regular-24 xl:regular-32">
              Multimedia University
              <span className="light-24"> December 2020 - March 2024</span>
            </p>
            <br></br>

            <ul className="list-disc pl-5">
              <li className="regular-24">CGPA: <span className="bold-24"> 3.50</span>/4.00 </li>
              <li className="regular-24">FYP: VR Kaiju Game. (Unity, C#)</li>
              <li className="regular-24">MUET: Band 4.5</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience