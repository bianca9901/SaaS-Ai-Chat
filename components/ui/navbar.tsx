"use client";
import { Menu, Sparkles } from "lucide-react";
import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileSideBar from "@/components/ui/mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Maven_Pro({
  weight: "700",
  subsets: ["latin"],
});

interface NavBarProps {
  isPro: boolean;
}

function NavBar({
  isPro
}:NavBarProps) {
  const proModal = useProModal();
  return (
    <div
      className="fixed w-full z-50 flex justify-between items-center py-2
    px-4 border-b border-primary/10 bg-secondary h-16"
    >
      <div className="flex items-center">
        <MobileSideBar />
        <Link href="/">
          <h1
            className={
              (cn("hidden md:block text-xl md:text-3xl font-bold text-primary"),
              font.className)
            }
          >
            chat.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-ceter gap-x-3">
        {!isPro && (
          <Button size="sm" variant="premium" onClick={proModal.onOpen}>
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        )} 
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default NavBar;
