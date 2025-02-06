import React from "react";
import UserModal from "../modals/UserModal";
import { useState } from "react";
import UserAvatar from "../buttons/UserAvatar";

const UserProfile = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseOver={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center relative flex-col"
    >
      <UserAvatar className="w-7 h-7" />
      {isHover && <UserModal setIsHover={setIsHover} />}
    </div>
  );
};

export default UserProfile;
