import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hooks/hooks";
import { setToggleMenu } from "@/app/redux/slices/MenuSlice";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface MenuItemsProps {
  className?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const links = [
    { name: "For You", path: "/for_you" },
    { name: "Discover", path: "/discover" },
    { name: "Manage your account", path: "/account" },
    { name: "Settings", path: "/settings" },
  ];

  const handleClick = () => {
    if (deviceType === "smartphone") {
      dispatch(setToggleMenu(false));
    }
  };
  const pathname = usePathname();

  return (
    <>
      {links.map((link, idx) => (
        <Link
          className={twMerge(
            className,
            pathname === link.path && "text-violet-500"
          )}
          onClick={handleClick}
          key={idx}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
