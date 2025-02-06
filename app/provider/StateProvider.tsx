"use client";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import DeviceListener from "@/app/utils/DeviceListener";
import ScrollListener from "@/app/utils/ScrollListener";
import { SessionProvider } from "next-auth/react";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ScrollListener />
      <DeviceListener />

      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};

export default StateProvider;
