"use client";

import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ChartAreaInteractive() {
  return (
    // <Card className="@container/card">
    //   <Image src="/hero-backgound.jpeg" width={1200} height={1000} alt="hero" />
    // </Card>
    <Card className="relative w-full h-screen overflow-hidden p-0 m-0 rounded-none shadow-none border-none">
      {" "}
      {/* Background image */}{" "}
      <Image
        src="/hero-backgound.jpeg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-10">
        <div className="text-white max-w-lg space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to my website
          </h1>
          <h2 className="text-3xl font-light">Farhad</h2>
        </div>
      </div>
    </Card>
  );
}
