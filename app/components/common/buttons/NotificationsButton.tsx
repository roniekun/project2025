import React from "react";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationsButton = () => {
  return (
    <div className="rounded-full">
      <Link className="text-black" href="/notifications">
        <IoMdNotificationsOutline className="w-6 h-6 hover:text-violet-500" />
      </Link>
    </div>
  );
};

export default NotificationsButton;
