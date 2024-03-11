"use client";
import { Menu, Sparkles } from "lucide-react";
import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const font = Maven_Pro({
  weight: "700",
  subsets: ["latin"],
});

function NavBar() {
  return (
    <div
      className="fixed w-full z-50 flex justify-between items-center py-2
    px-4 border-b border-primary/10 bg-secondary"
    >
      <div className="flex items-center">
        <Menu className="md:hidden block" />
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
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
