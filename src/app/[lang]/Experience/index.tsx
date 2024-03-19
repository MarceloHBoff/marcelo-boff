import { RevealList } from "next-reveal";

import { LangProps } from "@/@types";
import Title from "@/components/Title";
import { getDictionary } from "@/lib/dictionary";

import ExperienceItem from "./ExperienceItem";

export default async function Experience({ lang }: LangProps) {
  const { header, experiences } = await getDictionary(lang);

  return (
    <section id="experiences">
      <Title>{header.experiences}</Title>

      <RevealList interval={100} delay={300} className="relative 2xl:ml-32">
        <div>
          <ExperienceItem
            position={experiences.wss.position}
            time={experiences.wss.time}
            items={experiences.wss.text}
            graduation
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.vettech.position}
            time={experiences.vettech.time}
            items={experiences.vettech.text}
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.inlite.position}
            time={experiences.inlite.time}
            items={experiences.inlite.text}
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.rocketSeat.position}
            time={experiences.rocketSeat.time}
            items={experiences.rocketSeat.text}
            graduation
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.rech.position}
            time={experiences.rech.time}
            items={experiences.rech.text}
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.rechTrainee.position}
            time={experiences.rechTrainee.time}
            items={experiences.rechTrainee.text}
          />
        </div>
        <div>
          <ExperienceItem
            position={experiences.liberato.position}
            time={experiences.liberato.time}
            items={experiences.liberato.text}
            graduation
          />
        </div>
      </RevealList>
    </section>
  );
}
