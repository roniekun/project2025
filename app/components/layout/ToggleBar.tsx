"use client";
import React from "react";
import MenuItems from "../utils/MenuItems";
import LinkItems from "../utils/LinkItems";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/app/redux/hooks/hooks";

const ToggleBar = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const target = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!target.current) return;

      if (deviceType === "smartphone") {
        target.current.style.display = "flex"; // Ensure it's visible on smartphones
        if (isOpen) {
          gsap.set(navRef.current, { display: "block" });
          gsap.to(target.current, { ease: "power1.in", duration: 0.3, x: 0 });
        } else {
          gsap.to(target.current, {
            ease: "power1.out",
            duration: 0.3,
            x: "-100%",
            onComplete: () => {
              gsap.set(navRef.current, { display: "none" });
            },
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
    <nav
      ref={navRef}
      className="w-screen h-screen hidden bg-opacity-35 duration-300  bg-black fixed top-0"
    >
      <div
        ref={target}
        className="flex-col pt-20 shadow-md rounded-l-sm bg-neutral-600 lg:hidden z-30 md:hidden flex gap-4 fixed transform duration-0 left-0 top-0 -translate-x-[100%] h-screen w-[15rem] items-start justify-start p-[5vw]"
      >
        <div className="flex flex-col gap-4 ">
          <MenuItems className="font-medium text-2xl text-neutral-100 hover:text-neutral-700" />
        </div>
        <div className="flex flex-wrap gap-1 absolute bottom-0 mb-10 text-neutral-100">
          <LinkItems className="font-medium text-base" />
        </div>
      </div>
    </nav>
  );
};

export default ToggleBar;
