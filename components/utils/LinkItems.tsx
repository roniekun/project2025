import React from "react";
import Link from "next/link";

const LinkItems = () => {
  const links = [
    { name: "Facebook", path: "https://www.facebook.com" },
    { name: "Instagram", path: "https://www.instagram.com" },
    { name: "Tiktok", path: "https://www.Github.com" },
  ];

  return (
    <>
      {links.map((link, idx) => (
        <Link key={idx} href={link.path}>
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default LinkItems;
