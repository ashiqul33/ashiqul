import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

type skillType = {
  name: string;
  image: string;
}

export const SkillSection = ({ skills }: { skills: skillType[] }) => (
  <section className="py-16 md:py-24" id="skills">
    <div className="container mx-auto text-center">
      <SectionTitle>Skills</SectionTitle>
      <h3 className="text-xl mb-8 text-gray-300">The skills, tools and technologies I am really good at:</h3>
      <div className="flex flex-wrap justify-center items-center md:gap-20 gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-20">
            <Image src={skill.image} alt={skill.name} width={60} height={60} className="object-cover" />
            <span className="mt-2 text-sm text-gray-400 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-3 items-center sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={skill.image} alt={skill.name} width={60} height={60} className="object-cover" />
            <span className="mt-2 text-sm text-gray-400">{skill.name}</span>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);
