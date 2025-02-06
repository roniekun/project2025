"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { toggleMenu, setToggleMenu } from "@/app/redux/slices/MenuSlice";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Menu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    dispatch(setToggleMenu(false));
  }, [deviceType]);

  return (
    <>
      {deviceType === "smartphone" && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden cursor-pointer relative opacity-0"
        >
          <Hamburger
            onToggle={handleToggle}
            size={18}
            duration={0.1}
            toggled={isOpen}
          />
        </motion.button>
      )}
    </>
  );
};

export default Menu;
