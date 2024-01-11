"use client"
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Footer from "./Footer";

/**
 * Renders a navigation bar with a sidebar.
 * The navigation bar includes a title and a menu, while the sidebar contains additional content.
 *
 * @returns {JSX.Element} The rendered navigation bar and sidebar.
 */
export default function Navbar({ children }) {
  const [active, setActive] = React.useState("");
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-between ">
        {/* Navbar */}
        <div className="w-full lg:sticky lg:top-0 lg:z-20 navbar bg-[#3636368b] h-[100px] justify-evenly "
        >
          <div className="flex-none lg:hidden sticky top-0 ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-[#edde07] text-3xl font-semibold">
            Trendy gliterz
          </div>
          <div className=" hidden lg:flex  w-2/3 justify-around items-center">
            <ul className="menu menu-horizontal text-white ">
              {/* Navbar menu content here */}
              <li
                className={`${active === "Home" ? "border-b-2 mb-[0px]" : ""}`}
                onClick={() => {
                  setActive("Home");
                }}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={`${
                  active === "Product" ? "border-b-2 mb-[0px]" : ""
                }`}
                onClick={() => {
                  setActive("Product");
                }}
              >
                <Link href="/product">Product</Link>
              </li>
              
              <li
                className={`${active === "Cart" ? "border-b-2 mb-[0px]" : ""}`}
                onClick={() => {
                  setActive("Cart");
                }}
              >
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
            <ul className="flex text-white gap-[2rem] text-[1.75rem]">
              <li>
                <a>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
        {/* Footer */}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li
            className={`${active === "Home" ? "border-b-2 mb-[0px]" : ""}`}
            onClick={() => {
              setActive("Home");
            }}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={`${active === "Product" ? "border-b-2 mb-[0px]" : ""}`}
            onClick={() => {
              setActive("Product");
            }}
          >
            <Link href="/product">Product</Link>
          </li>
          {/* <li>
                <a>Offer Zone</a>
              </li> */}
          <li
            className={`${active === "Cart" ? "border-b-2 mb-[0px]" : ""}`}
            onClick={() => {
              setActive("Cart");
            }}
          >
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
