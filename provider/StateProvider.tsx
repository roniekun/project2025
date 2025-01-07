"use client";
import React, { use } from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import DeviceListener from "@/utils/DeviceListener";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <DeviceListener>{children}</DeviceListener>
    </Provider>
  );
};

export default StateProvider;
