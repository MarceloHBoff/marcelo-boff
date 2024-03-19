import Image from "next/image";

import { LangProps } from "@/@types";
import Title from "@/components/Title";
import { getDictionary } from "@/lib/dictionary";

export default async function About({ lang }: LangProps) {
  const { header, about } = await getDictionary(lang);

  return (
    <section id="about">
      <Title>{header.about}</Title>

      <div className="flex items-center py-4 px-4 flex-col 2xl:flex-row 2xl:px-12">
        <Image
          className="rounded-full border-8 transition-all hover:border-2"
          src="https://avatars.githubusercontent.com/u/47501567?v=4"
          alt="Marcelo Boff"
          width={200}
          height={200}
        />

        <div className="mt-10 2xl:ml-20 2xl:mt-0">
          {about.map((p, index) => (
            <p
              className="cursor-default mb-2 text-slate-400 transition-all hover:underline"
              key={index}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
