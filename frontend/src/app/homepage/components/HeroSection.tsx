"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, BrainCircuit } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-77.5 w-77.5 rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      <div className="container flex min-h-[calc(100vh-4rem)] items-center py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-20 inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            AI-Powered Computer Vision Platform
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Transform Your Vision with{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Novum brings cutting-edge computer vision to your fingertips.
            Analyze, understand, and interact with visual data like never before
            using our advanced AI platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button className="group relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 px-8 py-6 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="group px-8 py-6 text-base">
                <Eye className="mr-2 h-4 w-4" />
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-background via-background/80 to-background" />
      </div>
    </section>
  );
};

export default HeroSection;
