import { SectionTitle } from "@/components/SectionTitle";
import { SkillIcon } from "@/components/SkillIcon";

export const SkillSection = ({ skills }: { skills: string[] }) => (
  <section className="py-12 md:py-20">
    <SectionTitle>Skills</SectionTitle>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {skills.map((skill) => (
        <SkillIcon key={skill} skill={skill} />
      ))}
    </div>
  </section>
);
