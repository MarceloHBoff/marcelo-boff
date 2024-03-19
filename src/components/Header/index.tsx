import Image from "next/image";

import { LangProps } from "@/@types";
import { getDictionary } from "@/lib/dictionary";

import HeaderItem from "./HeaderItem";

export default async function Header({ lang }: LangProps) {
  const { header } = await getDictionary(lang);

  return (
    <header className="fixed w-full flex justify-between bg-orange-500 p-4 font-bold text-slate-100 px-6 2xl:px-56 z-50">
      <Image src="/logo.svg" alt="Marcelo Boff" width={25} height={25} />

      <HeaderItem href="#about" text={header.about} />
      <HeaderItem href="#skills" text={header.skills} />
      <HeaderItem href="#experiences" text={header.experiences} />
      <HeaderItem href="#contact" text={header.contact} />

      <div className="flex">
        <a
          href="/br"
          className="cursor-pointer bg-white hover:opacity-75 transition-all mr-2 w-12 h-7"
        >
          <Image
            className="bg-orange-500 w-full h-full"
            src="/language/brazil.svg"
            alt="Portuguese"
            width={10}
            height={10}
          />
        </a>
        <a
          href="/en"
          className="cursor-pointer bg-white hover:opacity-75 transition-all mr-2 w-12 h-7"
        >
          <Image
            className="bg-orange-500 w-full h-full"
            src="/language/usa.svg"
            alt="English"
            width={10}
            height={10}
          />
        </a>
      </div>
    </header>
  );
}
