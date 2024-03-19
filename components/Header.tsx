"use client";
import React from "react";
import Logo from "./ui/Logo";
import { UserButton } from "@clerk/nextjs";
import UseGetMe from "@/app/hooks/UseGetMe";

function Header() {
  const { user } = UseGetMe();
  return (
    <header className="container flex items-center justify-between bg-primary py-6 text-background">
      <Logo />
      <div className="flex flex-col items-center uppercase">
        <p className="font-bold">{user?.fullName}</p>
        <p>{user?.type}</p>
      </div>
      <UserButton />
    </header>
  );
}

export default Header;
