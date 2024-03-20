import Image from "next/image"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-20 xl:py-28 border-2 border-green-500 h-dvh mt-20h-screen justify-center">
        <div className="relative z-20 flex flex-col border-2 border-green-500">
            <div className="bg-green-60 relative mt-10 z-10 p-1 shadow-hardShadowRight">
                <h1 className="text-center bold-32 sm:bold-64 xl:bold-128 ">
                    Hi there, I&apos;m
                </h1>
                <p className="bold-32 sm:bold-64 xl:bold-128 text-center">Syafiq</p>
            </div>
        </div>

        <div className="relative flex flex-col border-2 border-blue-500">
            <div className="bg-green-70 relative z-10 pt-4 pb-4 shadow-hardShadowLeft">
                <p className="regular-16 text-center sm:regular-24 xl:regular-32">
                    I&apos;m a Full Stack Software Engineer, a recent graduate driven by a passion for learning, fueled by curiosity, and eager to tackle new challenges.
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

export default Hero