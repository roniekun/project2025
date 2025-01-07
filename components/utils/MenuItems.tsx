import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks/hooks";
import { twMerge } from "tailwind-merge";
import { setToggleMenu } from "@/store/slices/MenuSlice";
import { useAppDispatch } from "@/store/hooks/hooks";

const MenuItems = () => {
  const dispatch = useAppDispatch();
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleClick = () => {
    if (deviceType === "smartphone") {
      dispatch(setToggleMenu(false));
    }
  };

  const classNames: string =
    deviceType === "smartphone" ? "flex flex-col gap-4" : "flex gap-4";
  return (
    <>
      {links.map((link, idx) => (
        <Link onClick={handleClick} key={idx} href={link.path}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
