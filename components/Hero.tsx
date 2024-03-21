import Image from "next/image"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-20 xl:py-28 h-dvh mt-20h-screen justify-center">
        <div className="relative z-20 flex flex-col">
            <div className="bg-green-60 relative mt-10 z-10 p-1 shadow-hardShadowRight">
                <h1 className="text-center bold-32 sm:bold-64 xl:bold-128 ">
                    Hi there, I&apos;m
                </h1>
                <p className="bold-32 sm:bold-64 xl:bold-128 text-center">Syafiq</p>
            </div>
        </div>

        <div className="relative flex flex-col">
            <div className="bg-green-70 relative z-10 pt-4 pb-4 shadow-hardShadowLeft">
                <p className="regular-16 text-center sm:regular-24 xl:regular-32 p-1">
                    I&apos;m a Full Stack Software Engineer, a recent graduate driven by a passion for learning, fueled by curiosity, and eager to tackle new challenges.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero