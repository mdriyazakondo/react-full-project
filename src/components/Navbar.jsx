import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-green-800 text-white py-4 md:py-6 px-10 relative">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">React Practice</h1>
        {/* Mobile Responsive */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose></IoMdClose> : <FaBars></FaBars>}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Products</Link>
          </li>
          <li>
            <Link to="#">Blogs</Link>
          </li>
          <li>
            <Link to="#">Contacts</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
        </ul>
        <button className="hidden md:block">Login</button>

        <div
          className={`md:hidden w-full bg-green-600 top-full left-0 absolute ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contacts</li>
            <li>About</li>
            <li>
              <button className="">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
