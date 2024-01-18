"use client";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }) {
  const pathname = usePathname();
  const dashLinks = [
    {
      name: "Product",
      link: "/dashboard",
    },
    {
      name: "Order",
      link: "/dashboard/order",
    },
    {
      name: "Customer",
      link: "/dashboard/customer",
    },
  ];
  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        {/* Page content here */}
        <div className="mt-10 lg:mt-0 flex items-start w-full">
        {children}
        </div>

        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <label
          htmlFor="my-drawer-2"
          className="rounded-r-lg bg-gray-900 text-white px-2 py-4 border-[1px] fixed top-20 left-0 drawer-button lg:hidden text-3xl"
        >
          <IoMdArrowDropright />
        </label>
      </div>
      <div className="drawer-side lg:bg-neutral">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className=" text-center ml-5  drawer-overlay  text-3xl font-extrabold text-[#ffff00]"
        >
          Trendy gliterz
        </label>
        <ul className="menu p-4 w-80 min-h-full lg:min-h-[80%] bg-neutral text-white">
          {dashLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathname === link.link ? "bg-white text-black" : ""
                } hover:bg-white hover:text-black`}
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
