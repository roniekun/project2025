"use client";
import React from "react";
import Button from "../ui/libs/Button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const handleLogin = () => {
    // Implement login logic here
    console.log("Login button clicked");
    router.push("/login");
  };

  return (
    <Button handleClick={handleLogin} className="login-button border-none">
      Login
    </Button>
  );
};

export default LoginButton;
