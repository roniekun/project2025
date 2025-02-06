import React from "react";
import Link from "next/link";
import { FaRegMessage } from "react-icons/fa6";

const InboxButton = () => {
  return (
    <Link href="/message">
      <FaRegMessage className="text-black" />
    </Link>
  );
};

export default InboxButton;
