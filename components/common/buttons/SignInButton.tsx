"use client";
import React from "react";
import Button from "../ui/libs/Button";

const SignInButton = () => {
  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log("Sign-in button clicked");
  };

  return (
    <Button handleClick={handleSignIn} className="sign-in-button">
      Sign In
    </Button>
  );
};

export default SignInButton;
