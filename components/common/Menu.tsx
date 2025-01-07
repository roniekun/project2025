"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { toggleMenu } from "@/store/slices/MenuSlice";
import { Fade as Hamburger } from 'hamburger-react'

const Menu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const handleClick = () => {
    dispatch(toggleMenu());
    console.log("Menu clicked, isOpen:", isOpen);
  };

  return (
    <>
      <button className="md:hidden cursor-pointer" onClick={handleClick}>
      <Hamburger size={20} toggled={isOpen}   />
      </button>
  
    </>
  );
};

export default Menu;
