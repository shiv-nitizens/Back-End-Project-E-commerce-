import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import userImg from "../assets/user.png";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { user,setUser,searchQuery,setSearchQuery  } = useContext(ShopContext);
  const navigate = useNavigate();

  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();
  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const ishomepage = location.pathname === "/";

  

  return (
    <header
      className={`${
        !ishomepage && "bg-gradient-to-r from-primary via-white to-primary"
      } sticky top-0 z-50 max-padd-container flexBetween py-2`}
    >
      {/* Logo */}
      <Link to="/" className="bold-22 uppercase font-paci">
        Shopsyyy <span className="text-secondary bold-28">.</span>
      </Link>

      {/* Navbar */}
      <Navbar
        containerStyles={`${
          menuOpened
            ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50"
            : "hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1"
        }`}
      />

      {/* Right Section */}
      <div className="flex gap-8 items-center">

        {/* Search */}
        <div className="relative hidden xl:flex">
          <div
            className={`${
              showSearch
                ? "flex rounded-full bg-white w-[333px] p-3.5 pl-6"
                : "hidden"
            } ${!ishomepage ? "!bg-primary" : ""}`}
          >
            <input
              onChange={(e)=>setSearchQuery(e.target.value)}
              type="text"
              placeholder="Type here..."
              className="bg-transparent w-full outline-none text-[14px]"
            />
          </div>

          <div
            onClick={() => setShowSearch((prev) => !prev)}
            className={`cursor-pointer bg-tertiary text-white rounded-full p-2.5 text-sm m-1 ${
              showSearch ? "absolute top-0 right-0" : ""
            }`}
          >
            <FaSearch className="text-xl" />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-x-3 xs:gap-x-8">

          {/* Menu Toggle */}
          {menuOpened ? (
            <FaBarsStaggered
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer text-xl"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer text-xl"
            />
          )}

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="flex items-center cursor-pointer p-2 rounded-full bg-white relative"
          >
            <FaShoppingBasket size={24} />

            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* User Profile */}
          <div className="group relative">

            <div>
              {user ? (
                <div className="flex items-center cursor-pointer rounded-full bg-white">
                  <img src={userImg} alt="user" height={44} width={44} />
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="btn-dark flexCenter gap-x-2 rounded-full"
                >
                  Login
                  <RiUserLine className="text-xl" />
                </button>
              )}
            </div>

            {/* Dropdown */}
            {user && (
              <ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 hidden group-hover:flex flex-col medium-14 shadow-md z-50">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                >
                  Orders
                </li>

                <li
                  onClick={() => console.log("logout")}
                  className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;