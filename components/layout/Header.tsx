"use client";
import React from "react";
import Logo from "../common/ui/Logo";
import Menu from "../common/buttons/MenuButton";
import UserProfile from "../common/ui/UserProfile";
import MessagesButton from "../common/buttons/InboxButton";
import NotificationsButton from "../common/buttons/NotificationsButton";
import LoginButton from "../common/buttons/LoginButton";
import SignInButton from "../common/buttons/SignInButton";
import Search from "../common/ui/Search";
import { useAppSelector } from "@/store/hooks/hooks";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SearchButton from "../common/buttons/SearchButton";

const Header: React.FC = () => {
  const isLogin = true;
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const scrollPosition = useAppSelector((state) => state.scroll.scrollPosition);

  const target = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollPosition > 100) {
      gsap.to(target.current, { backgroundColor: "white", color: "black" });
    } else {
      gsap.to(target.current, {
        backgroundColor: "transparent",
        color: "white",
      });
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  const renderDesktopContent = () => {
    if (isLogin) {
      return (
        <div className="flex items-center gap-4">
          <Search />
          <MessagesButton />
          <NotificationsButton />
          <UserProfile />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <LoginButton />
        <SignInButton />
      </div>
    );
  };

  return (
    <header
      ref={target}
      style={{ color: "white" }}
      className="flex p-4 h-[3rem] shadow-md top-0 gap-4 z-50 sticky w-full items-center justify-between"
    >
      <div className="flex justify-center items-center">
        <Menu />
        <Logo />
      </div>

      {deviceType !== "smartphone" ? renderDesktopContent(): <SearchButton/> }
    </header>
  );
};

export default Header;
