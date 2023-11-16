import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Dialog, Popover } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logos } from "../Details";
import Social from "../Components/Social"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleClass = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            {/* <nav className={` ${!isOpen ? "hidden" : null} mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global`}> */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to="/" className="-m-1.5 p-1.5">
                        <img src={logos.logo} alt="logo" />
                    </NavLink>
                    <div onClick={toggleClass} className="cursor-pointer">
                        <svg
                            className="stroke-dark-heading dark:stroke-white md:hidden"
                            width="25"
                            height="20"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                            strokeWidth="1.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex lg:flex-1 lg:justify-center">
                    <ul className="font-medium md:flex md:space-x-5 md:mr-10 lg:gap-x-20">
                        <li className="pb-1 md:pb-0 hover:text-violet-400">
                            <NavLink to="/" onClick={toggleClass} className="text-sm font-semibold leading-6 text-gray-900">
                                Home
                            </NavLink>
                        </li>
                        <li className="pb-1 md:pb-0 hover:text-violet-400">
                            <NavLink to="/projects" onClick={toggleClass} className="text-sm font-semibold leading-6 text-gray-900">
                                Projects
                            </NavLink>
                        </li>
                        <li className="pb-1 md:pb-0 hover:text-violet-400">
                            <NavLink to="/about" onClick={toggleClass} className="text-sm font-semibold leading-6 text-gray-900">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Social />
                </div>
            </nav>
        </header>
    )
}
