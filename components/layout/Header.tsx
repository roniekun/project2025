import React from "react";
import Logo from "../common/ui/Logo";
import Menu from "../common/MenuButton";

const Header: React.FC = () => {
  return (
    <header className="flex p-4  z-50 sticky top-0 w-full flex-row items-center justify-between">
      <Logo /> <Menu />
    </header>
  );
};

export default Header;
