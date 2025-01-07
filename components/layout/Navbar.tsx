"use client";
import gsap from "gsap";
import MenuItems from "../utils/MenuItems";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { setToggleMenu, toggleMenu } from "@/store/slices/MenuSlice";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const dispatch = useAppDispatch();

  const classNames: string =
    deviceType === "desktop" || deviceType === "tablet"
      ? "w-full flex text-neutral-900 justify-end sticky top-0 gap-4 z-50"
      : "hidden";

  useEffect(() => {
    if (deviceType === "desktop") {
      dispatch(setToggleMenu(true));
    } else if (deviceType === "tablet") {
      dispatch(setToggleMenu(true));
    } else {
      dispatch(setToggleMenu(false));
    }
  }, [deviceType]);

  return (
    <div className={classNames}>
      <MenuItems />
    </div>
  );
};

export default Navbar;
