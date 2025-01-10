"use client;";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setScrollPosition } from "@/store/slices/ScrollSlice";

const ScrollListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollPosition(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollListener;
