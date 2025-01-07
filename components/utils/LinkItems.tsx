import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkItemsProps {
  className?: string;
}

const LinkItems: React.FC<LinkItemsProps> = ({ className }) => {
  const links = [
    { name: "Facebook", path: "https://www.facebook.com" },
    { name: "Instagram", path: "https://www.instagram.com" },
    { name: "Tiktok", path: "https://www.Github.com" },
  ];

  return (
    <>
      {links.map((link, idx) => (
        <Link
          className={twMerge(className)}
          target="blank"
          key={idx}
          rel="noopener noreferrer"
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default LinkItems;
