"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prevState) => !prevState);
  };
  const inputStyle =
    "outline-black  px-3 py-2  bg-zinc-100 rounded-sm transparent relative border border-zinc-900 flex justify-between items-center";

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-opacity-5 backdrop-blur-3xl">
      <form className="flex flex-col w-96 gap-5   p-10 shadow-lg" action="">
        <h1 className="text-lg font-black self-start">Sign in</h1>
        <div className="flex justify-between">
          <button className="px-5 py-2 w-32 border border-zinc-950 rounded-full">
            Facebook
          </button>
          <button className="px-5 py-2 w-32 border  border-zinc-950  rounded-full">
            Google
          </button>
        </div>
        <span className="self-center">or</span>
        <div className={inputStyle}>
          <input
            className="bg-transparent focus:outline-none w-full flex-1 font-medium"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className={inputStyle}>
          <input
            className="bg-transparent relative focus:outline-none w-full flex-1 font-medium"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <IoEyeOffOutline onClick={handleClick} className="cursor-pointer" />
          ) : (
            <IoEyeOutline onClick={handleClick} className="cursor-pointer" />
          )}
        </div>
        <Link href="/reset-password" className="text-base underline">
          Forgot password?{" "}
        </Link>
        <button
          className="border w-full p-3 bg-zinc-950 hover:bg-opacity-90 duration-300 rounded-full  text-zinc-50  font-bold"
          type="submit"
        >
          Sign in
        </button>
        <div className="flex justify-center gap-1 font-bold">
          <p className="text-zinc-500">Don&apos;t have account? </p>{" "}
          <Link className="font-bold" href="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
