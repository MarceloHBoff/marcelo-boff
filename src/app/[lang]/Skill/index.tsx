import { RevealList } from "next-reveal";

import { LangProps } from "@/@types";
import SkillGroup from "@/app/[lang]/Skill/SkillGroup";
import Title from "@/components/Title";
import { getDictionary } from "@/lib/dictionary";

const backend = [
  { text: "C#", value: 9 },
  { text: ".NET", value: 7 },
  { text: "Node JS", value: 6 },
  { text: "API", value: 8 },
];

const frontend = [
  { text: "React", value: 9 },
  { text: "Typescript", value: 10 },
  { text: "Next JS", value: 6 },
  { text: "Javascript", value: 10 },
  { text: "HTML", value: 9 },
  { text: "CSS", value: 9 },
  { text: "Vue JS", value: 6 },
];

const mobile = [
  { text: "React native", value: 9 },
  { text: "Typescript", value: 10 },
  { text: "Expo", value: 8 },
  { text: "Android Studio", value: 2 },
];

const databases = [
  { text: "SQL Server", value: 8 },
  { text: "Postgre SQL", value: 7 },
  { text: "Mongo DB", value: 6 },
  { text: "My SQL", value: 6 },
];

const others = [
  { text: "Git", value: 7 },
  { text: "GitHub", value: 6 },
  { text: "Azure DevOps", value: 5 },
  { text: "Scrum", value: 5 },
];

export default async function Skill({ lang }: LangProps) {
  const { header, skills } = await getDictionary(lang);

  return (
    <section id="skills">
      <Title>{header.skills}</Title>

      <RevealList
        interval={100}
        delay={300}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <div>
          <SkillGroup title="Backend" skills={backend} />
        </div>
        <div>
          <SkillGroup title="Frontend" skills={frontend} />
        </div>
        <div>
          <SkillGroup title="Mobile" skills={mobile} />
        </div>
        <div>
          <SkillGroup title={skills.database} skills={databases} />
        </div>
        <div>
          <SkillGroup title={skills.other} skills={others} />
        </div>
      </RevealList>
    </section>
  );
}
