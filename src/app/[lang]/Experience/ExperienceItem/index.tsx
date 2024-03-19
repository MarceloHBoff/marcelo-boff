"use client";

import Image from "next/image";

type AccordionProps = {
  position: string;
  time: string;
  items: string[];
  graduation?: boolean;
};

export default function ExperienceItem({
  position,
  time,
  items,
  graduation = false,
}: AccordionProps) {
  const bg = graduation ? "bg-purple-600" : "bg-orange-500";
  const border = graduation ? "border-purple-600" : "border-orange-500";

  return (
    <div className="flex w-full 2xl:w-2/3 before:content-[''] before:absolute before:top-0 before:left-[18px] before:h-full before:w-1 before:bg-white z-0">
      <div
        className={`flex items-center justify-center w-12 h-10 xl:w-10 2xl:w-10 rounded-full ${bg} z-10 translate-y-4 border-2`}
      >
        {graduation ? (
          <Image
            src="/graduation.svg"
            alt="Graduation"
            width={24}
            height={24}
          />
        ) : (
          <Image src="/suitcase.svg" alt="Suitcase" width={24} height={24} />
        )}
      </div>

      <div
        className={`ml-4 w-full border-t-4 mb-8 py-2 px-4 rounded-lg ${border} bg-slate-700 relative transition-all hover:scale-[1.02]`}
      >
        <div className="content-[''] absolute top-6 right-full h-0 w-0 border-8 border-transparent border-r-8 border-r-slate-700" />

        <div className="cursor-default font-bold text-2xl transition-all hover:underline">
          {position}
        </div>
        <div className="cursor-default font-bold text-base mb-3">{time}</div>

        <ul>
          {items.map((p) => (
            <li
              key={p}
              className="cursor-default py-1 ml-4 list-disc text-slate-300 transition-all hover:underline"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
