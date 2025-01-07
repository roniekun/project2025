import React from "react";
import Menu from "../common/Menu";
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  return (
    <div className="flex p-4  z-50 sticky top-0 w-full flex-row items-center justify-between">
      <Logo /> <Menu />
    </div>
  );
};

export default Header;
