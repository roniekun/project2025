import React from "react";
import Logo from "../common/ui/Logo";
import Menu from "../common/Menu";

const Header: React.FC = () => {
  return (
    <div className="flex p-4  z-50 sticky top-0 w-full flex-row items-center justify-between">
      <Logo /> <Menu />
    </div>
  );
};

export default Header;
