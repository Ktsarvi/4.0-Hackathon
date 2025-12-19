"use client";

import Link from "next/link";
import { BrainCog, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <BrainCog className="h-7 w-7 text-blue-500" />
            <span className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Novum
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            <Link
              href="#hero"
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-600 after:transition-all hover:after:w-4/5 hover:after:left-1/10"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-600 after:transition-all hover:after:w-4/5 hover:after:left-1/10"
            >
              About
            </Link>
            <Link
              href="#features"
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-600 after:transition-all hover:after:w-4/5 hover:after:left-1/10"
            >
              Features
            </Link>
          </div>
        </nav>

        {/* CTA Button - Right aligned */}
        <div className="flex-1 flex justify-end">
          <Link href="/dashboard">
            <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
              Dashboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="#hero"
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#features"
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  Features
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
