"use client";

import { ParamsLangProps } from "@/@types";
import RevealEffect from "@/components/RevealEffect";

import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Skill from "./Skill";

export default function Home({ params: { lang } }: ParamsLangProps) {
  return (
    <main className="p-4 2xl:py-10 2xl:px-20 flex flex-col">
      <RevealEffect>
        <About lang={lang} />
      </RevealEffect>

      <RevealEffect>
        <Skill lang={lang} />
      </RevealEffect>

      <RevealEffect>
        <Experience lang={lang} />
      </RevealEffect>

      <RevealEffect>
        <Contact lang={lang} />
      </RevealEffect>
    </main>
  );
}
