import React from "react";
import Link from "next/link";

const Login = () => {
  const inputStyle = "outline-black  p-4  bg-zinc-100 rounded-md";
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col  gap-1 min-w-[200px]" action="">
        <input placeholder="username" className={inputStyle} type="text" />
        <input placeholder="password" className={inputStyle} type="password" />
        <button
          className="border w-full p-4 bg-zinc-950 hover:bg-opacity-90 duration-300 rounded-md text-zinc-50 font-medium"
          type="submit"
        >
          {" "}
          Login
        </button>
        <Link href="" className="text-xs text-zinc-700 hover:underline cursor-pointer font-medium">
          Forget password?
        </Link>
        <Link  href="/signup" className="text-xs text-zinc-700 hover:underline cursor-pointer font-medium">
          Create an account
        </Link>
      </form>
    </div>
  );
};

export default Login;
