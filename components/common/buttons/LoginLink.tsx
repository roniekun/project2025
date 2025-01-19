"use client";
import React from "react";
import Link from "next/link";

const LoginLink = () => {
  return (
    <Link
      href="/auth/login"
      className="text-sm px-4 py-2 bg-blue-400 text-zinc-50 rounded-md"
    >
      Login
    </Link>
  );
};

export default LoginLink;
