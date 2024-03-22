"use client"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

return (
    <div className="relative flex justify-center px-10">
        <nav className="flexBetween super-max-container padding-container z-30 py-10 fixed top-0 w-full bg-white-0">
            <Link href="/" className="bold-20 sm:bold-32 md:bold-40 xl:bold-52">
                Syafiq.Azman
            </Link>

            <div className="hidden bg-green-50 relative z-10 px-5 pt-1 xl:flex shadow-hardShadowLight">
                <ul className="hidden h-full gap-5 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="medium-32 flexCenter cursor-pointer pb-1.5 hover:text-white-0 transition duration-300">
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
                onClick={toggleMenu}
                className="inline-block cursor-pointer xl:hidden"
            />

            {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 transition-all duration-200 z-40 flex justify-center items-center">
                <div className="relative">
                    <ul className="text-white text-center">
                        <li className="bold-40 cursor-pointer py-3 text-white-0" onClick={closeMenu}>.close()</li>
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className="bold-40 cursor-pointer py-3 text-white-0" onClick={toggleMenu}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            )}
        </nav>
    </div>
  )
}

export default Navbar