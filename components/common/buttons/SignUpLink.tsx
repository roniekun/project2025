"use client";
import React from "react";
import Link from "next/link";

const SignUpLink = () => {
  return (
    <Link href="/auth/signup" className="text-sm px-4 py-2 bg-zinc-900 text-zinc-50 rounded-md">
      Create account
    </Link>
  );
};

export default SignUpLink;
