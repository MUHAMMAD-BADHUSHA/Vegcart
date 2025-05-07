import React from "react";
import { useState } from "react";
import logo from '../../assets/logo2.png'
import logout from "../../assets/logout.svg";
import person from '../../assets/person.svg'
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { Link } from "react-router-dom";
function UserNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav className=" fixed top-0 w-full z-10 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-gray-950/30 h-[60px] shadow-md   ">
          {/* Left - Logo */}
          <div className="text-2xl  font-bold text-green-5 flex gap-1">
            <img src={logo} alt="" width={40} height={40} className="rounded-xl" />
            <Link href="#" className="text-green-800">
              veg<span className="text-white">cart</span>
            </Link>
          </div>

          {/* Center - Nav links (hidden on mobile) */}
          <ul className=" hidden md:flex gap-8 justify-center flex-1 text-white font-medium">
            <li>
              <Link to={'/home'}
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900 hover:text-emerald-900  "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/order'}
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900  hover:text-emerald-900  "
              >
                orders
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover: border-b-2 border-transparent hover:border-b-emerald-900  hover:text-emerald-900"
              >
                Contact
              </Link>
              
            </li>
          </ul>

          {/* Right - Icons */}
          <div className="flex items-center gap-6 ">
          <Link to={'/cart'}>
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </Link>
            <Link to={'/items'}>
              <img src={person} alt="Bag" className="w-6 h-6" />
            </Link>
            <Link to={'/'}>
              <img src={logout} alt="Cart" className="w-6 h-6" />
            </Link>
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
              <Link to={'/home'}
                className="hover:border-b border-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/orders'}
                className="hover:border-b border-white "
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:border-b border-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default UserNav;
