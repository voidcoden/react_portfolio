import { IMAGE_LINKS, PROJECT_DESC, PROJECT_TITLE, TECH_STACKS } from '@/constants';
import Image from 'next/image';

function Projects() {
  return (
<section id="projects" className="max-container padding-container-small py-10 xl:py-20 md:gap-20 z-20  bg-black mt-20h-screen justify-center">
  <div>
    <h1 className='text-white-10 bold-52 sm:bold-128 xl:bold-128 xl:py-10 xl:px-10'>
      Projects
    </h1>
  </div>
  <div className="flex flex-wrap items-center justify-center">
    <div className="m-6 p-0 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-2 ">
      {[1, 2, 3, 4].map((item) => (
        <div className="flex-col relative p-2" key={item}>
          <a href={IMAGE_LINKS[item - 1]} className="w-full h-full relative block">
            <Image 
              src={`/myphoto${item}.jpg`}
              alt={`myphoto-${item}`}
              width={1000}
              height={1000}
              className="w-full object-cover sm:w-[500px] sm:h-[500px] sm:mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center p-4">
                <h2 className="text-2xl font-semibold mb-2">{PROJECT_DESC[item - 1]}</h2>
                <div className="flex flex-wrap">
                  {PROJECT_TITLE[item - 1].map((tech, index) => (
                    <div key={index} className="bg-green-50 text-sm m-1.5 p-1.5 shadow-hardShadowWhiteSmall">{tech}</div>
                  ))}
                </div>
                <div className="flex flex-wrap">
                  {TECH_STACKS[item - 1].map((tech, index) => (
                    <div key={index} className="bg-green-70 text-sm m-1.5 p-1.5 shadow-hardShadowWhiteSmall">{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div> 
      ))}
    </div>
  </div>
</section>


  );
}

export default Projects;
