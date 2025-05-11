import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname || "/");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="bg-green-800 text-white py-4 md:py-6 px-10 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-3xl font-bold ">React Practice</h1>
        {/* Mobile Responsive */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose></IoMdClose> : <FaBars></FaBars>}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`${
                activeLink === "/"
                  ? "text-green-500 text-xl font-semibold"
                  : "hover:text-green-500 text-xl font-semibold"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleLinkClick("/products")}
              className={`${
                activeLink === "/products"
                  ? "text-green-500 text-xl font-semibold"
                  : "hover:text-green-500 text-xl font-semibold"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => handleLinkClick("/blogs")}
              className={`${
                activeLink === "/blogs"
                  ? "text-green-500 text-xl font-semibold"
                  : "hover:text-green-500 text-xl font-semibold"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              onClick={() => handleLinkClick("/contacts")}
              className={`${
                activeLink === "/contacts"
                  ? "text-green-500 text-xl font-semibold"
                  : "hover:text-green-500 text-xl font-semibold"
              }`}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`${
                activeLink === "/about"
                  ? "text-green-500 text-xl font-semibold"
                  : "hover:text-green-500 text-xl font-semibold"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <Link className="hidden md:block" to={"/login"}>
          <button className="  cursor-pointer border-2 border-gray-200 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-black font-semibold">
            Login
          </button>
        </Link>

        <div
          className={`md:hidden w-full bg-green-600 top-full left-0 absolute ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`${
                  activeLink === "/"
                    ? "text-green-500 text-xl font-semibold"
                    : "hover:text-green-500 text-xl font-semibold"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => handleLinkClick("/products")}
                className={`${
                  activeLink === "/products"
                    ? "text-green-500 text-xl font-semibold"
                    : "hover:text-green-500 text-xl font-semibold"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={() => handleLinkClick("/blogs")}
                className={`${
                  activeLink === "/blogs"
                    ? "text-green-500 text-xl font-semibold"
                    : "hover:text-green-500 text-xl font-semibold"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                onClick={() => handleLinkClick("/contacts")}
                className={`${
                  activeLink === "/contacts"
                    ? "text-green-500 text-xl font-semibold"
                    : "hover:text-green-500 text-xl font-semibold"
                }`}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("/about")}
                className={`${
                  activeLink === "/about"
                    ? "text-green-500 text-xl font-semibold"
                    : "hover:text-green-500 text-xl font-semibold"
                }`}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/login"}>
                <button className="cursor-pointer  border-2 border-gray-200 px-6 py-2 rounded-xl text-xl hover:bg-white hover:text-black font-semibold">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
