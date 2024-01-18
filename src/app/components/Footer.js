import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-[#365c9a] lg:h-[300px] gap-y-10 p-4 items-start justify-evenly pt-16">
        <div className=" w-full lg:w-1/5 flex justify-center items-center text-white text-center text-4xl font-extrabold">
          <h1 className="text-4xl font-extrabold w-[60%] lg:w-full">
            In a world full of trends, we offer{" "}
            <span className="text-[#ffff00]">Timeless</span> elegance
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-1/4 text-white text-sm font-normal space-y-1">
          <h1 className="text-base font-medium mb-5">Trendy gliterz</h1>

          <p className="text-sm">Phone: +91 7598610389</p>
          <p>Email: postboxwb22@gmail.com</p>
          <p>Address:1st stree rageswari nagar,Chitlapkam</p>
          <div className="flex w-[80%] justify-center mx-auto gap-x-5 pt-8">
            <div className="border-[1px] rounded-badge border-white p-2 hover:scale-110 transition-all ">
            <RiTwitterXFill className="text-[#ccc] hover:text-[#ffffff] text-xl " />
            </div>
            <div className="border-[1px] rounded-badge border-white p-2 hover:scale-110 transition-all ">
            <FaFacebookF className="text-[#ccc] hover:text-[#ffffff] text-xl" />
            </div>
            <div className="border-[1px] rounded-badge border-white p-2 hover:scale-110 transition-all ">

            <FaYoutube className="text-[#ccc] hover:text-[#ffffff] text-xl" />
            </div>
            <div className="border-[1px] rounded-badge border-white p-2 hover:scale-110 transition-all ">
            <FaInstagram className="text-[#ccc] hover:text-[#ffffff] text-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/5 justify-center items-center lg:items-end text-base font-normal text-white">
          <h1 className="font-medium text-base mb-5"> Nav Links</h1>
          <ul className="text-right text-sm">
            <li><Link href="/">
            Home
            </Link>
            </li>
            <li>
            <Link href="/product">
              Products
              </Link></li>
            <li>
            <Link href="/cart">
              Cart
              </Link>
              </li>
          </ul>
          
        </div>
      </div>
      <div className="text-white text-sm bg-[#000] w-full flex justify-center items-center p-8">
        Designed and developed by &nbsp;
        <p className="text-[#d38740]">Bakalaurs</p>
      </div>
    </>
  );
}
