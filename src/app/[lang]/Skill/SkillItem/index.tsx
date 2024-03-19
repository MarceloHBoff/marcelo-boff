"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

type SkillProps = {
  skill: string;
  value: number;
};

function getEmptyArray(size: number) {
  return Array(size).fill(1);
}

function getSlug(text: string) {
  return text
    .toLocaleLowerCase()
    .replace(" ", "-")
    .replace("#", "")
    .replace(".", "");
}

export default function SkillItem({ skill, value }: SkillProps) {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const time = 1500 / value;

    const timer = setInterval(() => {
      setDelay((p) => p + 1);
    }, time);

    setTimeout(() => {
      clearInterval(timer!);
    }, time * value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="group rounded-xl p-4 bg-slate-700 w-full transition-all border-t-4 border-orange-500 hover:bg-slate-600">
      <div className="flex justify-between">
        <strong>{skill}</strong>

        <Image
          className="transition-all duration-500 group-hover:rotate-360 h-12 w-12"
          src={`/skills/${getSlug(skill)}.svg`}
          alt={skill}
          width={48}
          height={48}
        />
      </div>

      <div className="flex mt-2">
        {getEmptyArray(10).map((_, index) => (
          <div
            key={index}
            className={`transition-all rounded-3xl w-4 h-2 mr-1 border-2 ${
              delay > index
                ? "bg-orange-500 border-orange-500"
                : "border-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
