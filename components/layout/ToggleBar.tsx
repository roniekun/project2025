"use client";
import React from "react";
import MenuItems from "../utils/MenuItems";
import LinkItems from "../utils/LinkItems";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";

const ToggleBar = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const dispatch = useAppDispatch();

  const target = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!target.current) return;

    if (deviceType === "smartphone") {
      target.current.style.display = "flex"; // Ensure it's visible on smartphones
      if (isOpen) {
        gsap.to(target.current, { duration: 0.5, x: 0 });
      } else {
        gsap.to(target.current, { duration: 0.5, x: "100%" });
      }
    }
  }, [deviceType, isOpen, target]);

  return (
    <div
      ref={target}
      className="flex-col bg-neutral-400 lg:hidden z-30 md:hidden flex gap-4 fixed transform duration-0 right-0 top-0 translate-x-[100%] h-screen justify-center items-center w-screen"
    >
      <div className="flex flex-col gap-4">
        <MenuItems />
      </div>
      <div className="flex gap-4 absolute bottom-0 mb-10">
        <LinkItems  />
      </div>
    </div>
  );
};

export default ToggleBar;
