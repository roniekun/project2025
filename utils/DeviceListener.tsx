"use client";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setDeviceType } from "@/store/slices/DeviceSlice";

const DeviceListener = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      dispatch(setDeviceType("smartphone"));
    } else if (width < 1024) {
      dispatch(setDeviceType("tablet"));
    } else {
      dispatch(setDeviceType("desktop"));
    }
  };

  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (target.current) {
      target.current.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, target]);

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return <div ref={target}>{children}</div>;
};
export default DeviceListener;
