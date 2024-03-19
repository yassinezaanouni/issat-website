"use client";
import Image from "next/image";
import useStoreUserEffect from "./hooks/UseStoreUser";
import { useConvexAuth, useQuery } from "convex/react";
import { UserButton, useUser } from "@clerk/nextjs";
import ContinueSignUp from "@/components/auth/ContinueSignUp";
import { api } from "@/convex/_generated/api";
import Spinner from "@/components/ui/Spinner";
import UseGetMe from "./hooks/UseGetMe";

export default function Home() {
  const userId = useStoreUserEffect();
  const { user } = UseGetMe();
  return (
    <section className="container flex min-h-[80vh] items-center justify-center">
      {!user ? (
        <Spinner />
      ) : user?.type ? (
        <div>Dashboard</div>
      ) : (
        <ContinueSignUp />
      )}
    </section>
  );
}
