import React from "react";
import SearchButton from "../buttons/SearchButton";
import { useAppSelector } from "@/store/hooks/hooks";
import SearchInput from "./libs/SearchInput";
const Search = () => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  return (
    <div>{deviceType === "desktop" ? <SearchInput /> : <SearchButton />}</div>
  );
};

export default Search;
