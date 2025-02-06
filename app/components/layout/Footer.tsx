"use client";

import React from "react";
import LinkItems from "../utils/LinkItems";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative ottom-0 sm:p-[10vw] p-[5vw] w-full max-w-[1400px] self-center flex-col gap-5  flex  text-white">
      <form className="flex flex-col pb-4 gap-2" action="">
        <h1 className="font-semibold text-base">
          Looking for something specific?{" "}
        </h1>
        <div className="flex flex-row gap-3">
          {" "}
          <input
            className="border-b-2 bg-transparent w-full focus:outline-none "
            placeholder="Type here to start searching "
            type="email"
          />{" "}
          <button
            className="border-2 px-3 py-2 text-sm whitespace-nowrap"
            type="submit"
          >
            Let&apos;s find it
          </button>
        </div>
      </form>

      <div className="flex-col flex md:flex-row gap-5 w-full relative justify-between">
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-semibold uppercase">Contact Me</h2>
          <p>roniebenitez01@gmail.com</p>
        </div>
        <div className="flex w-full flex-col  gap-2">
          <h3 className="uppercase font-semibold">Digital Space</h3>
          <div className="flex flex-col">
            <LinkItems className="space-y-1" />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-2">
          <h5 className="font-semibold">All Rights Reserved</h5>
          <h4 className="font-semibold">&copy;{currentYear}</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
