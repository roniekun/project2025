"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks/hooks";

const Logo: React.FC = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  return (
    <Link
      style={{ color: isOpen ? "whitesmoke" : "", transitionDelay: ".3s" }}
      className="text-base text-neutral-950 transition-colors duration-300"
      href="/"
    >
      Book up
    </Link>
  );
};

export default Logo;
