"use client";
import { useActionState } from "react";
import { useState } from "react";
import { signup } from "./action";

const SignUpForm: React.FC = () => {
  const containerStyle = "container flex gap-1 w-full relative flex-col";
  const labelStyle = "font-medium";
  const inputStyle = "w-full flex-1 p-2 rounded-md";

  const [state, action, pending] = useActionState(signup);

  return (
    <form
      action={action}
      className="flex w-full relative flex-col bg-zinc-100 gap-4 p-4 justify-center items-center sm:w-[500px] py-20 rounded-md"
    >
      <div className="container gap-1 grid grid-cols-2">
        <div>
          {" "}
          <label className={labelStyle} htmlFor="name">
            Firstname
          </label>
          <input className={inputStyle} type="text" name="name" />
        </div>
        <div>
          {" "}
          <label className={labelStyle} htmlFor="name">
            Lastname
          </label>
          <input className={inputStyle} type="text" name="name" />
        </div>
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="email">
          Email
        </label>
        <input className={inputStyle} type="email" name="email" />
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="password">
          Password
        </label>

        <input className={inputStyle} type="password" name="password" />
      </div>
      <div className={containerStyle}>
        <label className={labelStyle} htmlFor="confirm-password">
          Confirm password
        </label>
        <input className={inputStyle} type="password" name="confirm-password" />
      </div>
      <div className={containerStyle}>
        <br />
        <button
          className="border w-full relative bg-neutral-800 text-neutral-50 px-4 py-3 rounded-md"
          type="submit"
        >
          {" "}
          Sign up
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;
