import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

    return (
<div className="relative flex justify-center px-10">
    <nav className="flexBetween super-max-container padding-container z-30 py-10 fixed top-0 w-full bg-white-0">
        <Link href="/" className="bold-20 sm:bold-32 md:bold-40 xl:bold-52">
            Syafiq.Azman
        </Link>

        <div className="hidden bg-green-50 relative z-10 px-5 pt-1 xl:flex shadow-hardShadowLight">
            <ul className="hidden h-full gap-5 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="medium-32 flexCenter cursor-pointer pb-1.5 transition-all hover:underline">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </div>

        <Image 
            src="menu.svg"
            alt="menu"
            width={40}
            height={40}
            className="inline-block cursor-pointer xl:hidden"
        />
    </nav>
</div>

  )
}

export default Navbar