"use client";
import React from "react";
import Logo from "./ui/Logo";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import useStoreUserEffect from "@/app/hooks/UseStoreUser";

function Header() {
  return (
    <header className="container flex items-center justify-between bg-primary py-6 text-background">
      <Logo />
      <UserButton />
    </header>
  );
}

export default Header;
