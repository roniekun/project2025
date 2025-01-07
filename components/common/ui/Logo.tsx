"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks/hooks";

const Logo: React.FC = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  return (
    <Link
      style={{ color: isOpen ? "whitesmoke" : "black", transitionDelay: ".5s" }}
      className="text-base"
      href="/"
    >
      Book up
    </Link>
  );
};

export default Logo;
