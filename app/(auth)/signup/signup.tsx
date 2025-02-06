"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { SignUpAction } from "@/app/actions/auth";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const SignUpForm: React.FC = () => {
  const containerStyle = "container flex gap-1 w-full relative flex-col";
  const labelStyle = "font-medium";
  const inputStyle =
    "w-full flex-1 p-2 rounded-sm border bg-transparent border-zinc-600 focus:outline-none ";
  interface StateProps {
    password: boolean;
    confirmPassword: boolean;
  }
  const [showKey, setShowKey] = useState<StateProps>({
    password: false,
    confirmPassword: false,
  });

  const handleClick = (key: "password" | "confirmPassword") => {
    setShowKey((prevState: StateProps) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <form
      action={SignUpAction}
      className="flex w-full relative flex-col gap-5 justify-center max-w-96 items-center rounded-md appearance-none py-5 "
    >
      <div className=" relative container gap-2 grid grid-cols-2">
        <div>
          <label className={labelStyle} htmlFor="name">
            First name
          </label>
          <div>
            <input className={inputStyle} type="text" name="name" />
          </div>
        </div>
        <div>
          {" "}
          <label className={labelStyle} htmlFor="lastname">
            Last name
          </label>
          <div>
            <input className={inputStyle} type="text" name="lastname" />
          </div>
        </div>
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="email">
          Email
        </label>
        <div className={twMerge(inputStyle, "gap-1 flex ")}>
          <input
            className="w-full focus:outline-none bg-transparent autofill:bg-transparent"
            type="email"
            name="email"
          />
        </div>
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="password">
          Password
        </label>
        <div
          className={twMerge(
            inputStyle,
            "gap-1 flex  justify-center items-center"
          )}
        >
          <input
            className="flex-1 w-full focus:outline-none bg-transparent"
            type={showKey.password ? "text" : "password"}
            name="password"
          />
          <div onClick={() => handleClick("password")}>
            {showKey.password ? (
              <IoEyeOffOutline className="cursor-pointer" />
            ) : (
              <IoEyeOutline className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="confirm-password">
          Confirm password
        </label>
        <div
          className={twMerge(
            inputStyle,
            "gap-1 flex  justify-center items-center"
          )}
        >
          <input
            className="flex-1 w-full focus:outline-none bg-transparent"
            type={showKey.confirmPassword ? "text" : "password"}
            name="confirm_password"
          />
          <div onClick={() => handleClick("confirmPassword")}>
            {showKey.confirmPassword ? (
              <IoEyeOffOutline className="cursor-pointer" />
            ) : (
              <IoEyeOutline className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div className={containerStyle}>
        <br />
        <button
          className="border w-full relative font-bold bg-neutral-800 text-neutral-50 px-4 py-3 rounded-full"
          type="submit"
        >
          {" "}
          Sign up
        </button>
      </div>
      <div className="text-sm flex flex-col gap-5 container">
        <p className="font-bold">
          Already a member?{" "}
          <Link className="text-blue-500" href="/signin">
            Sign in{" "}
          </Link>
        </p>
        <p className="font-bold">
          By registering, you agree to the{" "}
          <Link className="underline " href="/terms-of-use">
            Terms of Use{" "}
          </Link>
          and
          <Link className="underline" href="/privacy-policy">
            {" "}
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
};
export default SignUpForm;
