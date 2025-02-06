import React from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

const SearchButton = () => {
  return (
    <Link href="/search" className="border-none text-base">
      <GoSearch className="w-5 h-5 text-black" />
    </Link>
  );
};

export default SearchButton;
