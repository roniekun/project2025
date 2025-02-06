"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hooks/hooks";

const Logo: React.FC = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  return (
    <Link
      // style={{ color: isOpen ? "whitesmoke" : "", transitionDelay: ".3s" }}
      className="whitespace-nowrap relative font-semibold text-xl"
      href="/"
    >
      Appname
    </Link>
  );
};

export default Logo;
