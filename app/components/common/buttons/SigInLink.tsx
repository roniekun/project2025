"use client";
import React from "react";
import Link from "next/link";

const SignInLink = () => {
  return (
    <Link
      href="/signin"
      className="text-sm px-4 py-2 rounded-full bg-yellow-300"
    >
      Sign in
    </Link>
  );
};

export default SignInLink;
