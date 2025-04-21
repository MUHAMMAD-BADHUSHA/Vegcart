import React from "react";
import { useState } from "react";
import logo from '../assets/logo2.png'
import bag from "../assets/bag.svg";
import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav className=" fixed top-0 w-full z-10 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-gray-950/30 h-[60px] shadow-md   ">
          {/* Left - Logo */}
          <div className="text-2xl ml-10 font-bold text-green-800 flex gap-1">
            <img src={logo} alt="" width={40} height={40} className="rounded-xl" />
            <a href="#" >
              Veg<span className="text-emerald-900">cart</span>
            </a>
          </div>

          {/* Center - Nav links (hidden on mobile) */}
          <ul className=" hidden md:flex gap-8 justify-center flex-1 text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900 hover:text-emerald-900  "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900  hover:text-emerald-900  "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900  hover:text-emerald-900"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right - Icons */}
          <div className="flex items-center gap-6 mr-10">
            <a href="#">
              <img src={bag} alt="Bag" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </a>
            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <img src={close} alt="Menu" className="w-6 h-6" />
              ) : (
                <img src={menu} alt="Menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Links */}
        {isOpen && (
          <ul className=" fixed top-0 w-full z-10 flex flex-col gap-4 px-6 py-4 mt-15 bg-gray-950/30 backdrop-blur-md md:hidden text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:border-b border-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:border-b border-white "
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:border-b border-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Navbar;
