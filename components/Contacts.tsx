import Image from "next/image"

const Contacts = () => {
  return (
    <section id="contacts" className="max-container padding-container flex flex-col gap-20 py-10 md:gap-20 xl:py-28  h-dvh mt-20h-screen justify-center">
    <div className="relative z-20 flex flex-col ">
        <div className="bg-green-80 relative mt-10 z-10 shadow-hardShadowRight py-10">
            <h1 className="text-center bold-32 sm:bold-64 xl:bold-128 ">
                Get In Touch
            </h1>
        </div>
    </div>

    <div className="bg-green-70 relative flex flex-col xl:flex-row justify-center z-10 shadow-hardShadowLeft py-10"> 
        <div className="relative flex flex-row justify-center items-center px-5 py-5 mx-10">
            <Image 
                src="Email.svg"
                alt="email"
                width={35}
                height={35}
                className="mr-2 xl:mr-5 xl:w-[50px] xl:h-[50px]"
            />
            <div className="bg-green-50 p-4 shadow-hardShadowLight"><p className="bold-16 text-center sm:bold-24 xl:bold-32 hover:text-white-10 hover:opacity-80 hover:scale-105 hover:underline transition duration-300 "><a href="mailto:azman.syafiq01@gmail.com">azman.syafiq01@gmail.com</a></p></div>
        </div>
        <div className="relative flex flex-row justify-center items-center px-5 mx-10">
            <a className="hover:scale-150 hover:filter hover:brightness-75 transition duration-300 flex flex-row" href="https://github.com/voidcoden">
                <Image 
                    src="Github.svg"
                    alt="github"
                    width={35}
                    height={35}
                    className="mr-2 xl:mr-5 xl:w-[50px] xl:h-[50px]"
                />
            </a>
            <a className="hover:scale-150 hover:filter hover:brightness-75 transition duration-300 flex flex-row" href="https://www.linkedin.com/in/syafiq-shamsul-azman-0a2180273/">
                <Image 
                    src="LinkedIn.svg"
                    alt="linkedin"
                    width={35}
                    height={35}
                    className="mr-2 xl:mr-5 xl:w-[50px] xl:h-[50px]"
                />
            </a>
            <button className="bg-green-50 p-3 xl:p-4 shadow-hardShadowLight" onClick={() => window.open("/Syafiq-Resume.pdf")}><p className="bold-16 text-center sm:bold-24 xl:bold-32 hover:text-white-10 hover:opacity-80 hover:scale-105 hover:underline transition duration-300">Resume</p></button>
        </div>
    </div>

</section>
  )
}

export default Contacts