"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { toggleMenu } from "@/store/slices/MenuSlice";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

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
      {deviceType === "smartphone" && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden cursor-pointer opacity-0"
          onClick={handleClick}
        > 
          <Hamburger size={20} color={isOpen? "whitesmoke": "black"} 
          duration={.5} toggled={isOpen} />
        </motion.button>
      )}
    </>
  );
};

export default Menu;
