"use client";
import MenuItems from "../utils/MenuItems";
import { useAppSelector} from "@/store/hooks/hooks";

const Navbar = () => {
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const classNames: string =
    deviceType === "desktop" || deviceType === "tablet"
      ? "w-full flex text-neutral-900 justify-end sticky top-0 gap-4 z-50"
      : "hidden";

  return (
    <nav className={classNames}>
      <MenuItems />
    </nav>
  );
};

export default Navbar;
