import { SkillProps } from "@/@types";
import SkillItem from "@/app/[lang]/Skill/SkillItem";

type SkillGroupProps = {
  skills: SkillProps[];
  title: string;
};

export default function SkillGroup({ skills, title }: SkillGroupProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-lg font-bold mb-4 text-center">{title}</div>

      {skills.map((p, index) => (
        <div key={index} className="w-full mt-4">
          <SkillItem skill={p.text} value={p.value} />
        </div>
      ))}
    </div>
  );
}
