"use client";

import { RevealWrapper } from "next-reveal";

import { ComponentProps } from "@/@types";

export default function RevealEffect({ children }: ComponentProps) {
  return (
    <RevealWrapper
      className="load-hidden"
      rotate={{ x: 12, y: 20, z: 0 }}
      origin="left"
      delay={100}
      duration={800}
      distance="500px"
      viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
    >
      {children}
    </RevealWrapper>
  );
}
