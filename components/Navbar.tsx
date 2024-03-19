import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/" className="bold-40">
            Syafiq.Azman
        </Link>

        <div className="relative">
            <div className="hidden bg-green-50 relative z-10 p-1 lg:flex">
                <ul className="hidden h-full gap-5 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="medium-25 flexCenter cursor-pointer pb-1.5 transition-all hover:underline">
                    {link.label}
                    </Link>
                ))}
                </ul>
            </div>
        <div className="hidden absolute top-1.5 left-1.5 w-full h-full bg-black z-0 lg:flex"></div>
        </div>

        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar