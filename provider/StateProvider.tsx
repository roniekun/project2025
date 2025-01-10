"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import DeviceListener from "@/utils/DeviceListener";
import ScrollListener from "@/utils/ScrollListener";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ScrollListener />
      <DeviceListener/>{children}
    </Provider>
  );
};

export default StateProvider;
