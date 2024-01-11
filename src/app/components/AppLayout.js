"use client"
import React from 'react';
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function AppLayout({children}) {
    const pathname = usePathname();
	const shouldHideHeaderAndFooter =
		pathname.startsWith("/dashboard");
  return(<>
    {(!shouldHideHeaderAndFooter) ? (<Navbar>{children}</Navbar>):<>{children}</>}
  </>
  );
}

