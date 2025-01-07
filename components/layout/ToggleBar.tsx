"use client";
import React from "react";
import MenuItems from "../utils/MenuItems";
import LinkItems from "../utils/LinkItems";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/store/hooks/hooks";

const ToggleBar = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const target = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!target.current) return;

      if (deviceType === "smartphone") {
        target.current.style.display = "flex"; // Ensure it's visible on smartphones
        if (isOpen) {
          gsap.to(target.current, { ease: "power1.in", duration: 0.5, x: 0 });
        } else {
          gsap.to(target.current, {
            ease: "power1.out",
            duration: 0.5,
            x: "100%",
          });
        }
      } else {
        target.current.style.display = "none"; // Ensure it's hidden on desktops
        gsap.set(target.current, {
          x: "100%",
        });
      }
    },
    { dependencies: [isOpen, deviceType, target] }
  );

  return (
    <div
      ref={target}
      className="flex-col bg-neutral-600 lg:hidden z-30 md:hidden flex gap-4 fixed transform duration-0 right-0 top-0 translate-x-[100%] h-screen justify-center items-center w-screen"
    >
      <div className="flex flex-col gap-4">
        <MenuItems className="font-medium text-2xl text-neutral-100 hover:text-neutral-700" />
      </div>
      <div className="flex gap-4 absolute bottom-0 mb-10 text-neutral-100">
        <LinkItems className="font-medium text-base" />
      </div>
    </div>
  );
};

export default ToggleBar;
