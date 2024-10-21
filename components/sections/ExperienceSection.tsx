import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceCard, experienceType } from "@/components/ExperienceCard";

export const ExperienceSection = ({ experiences }: { experiences: experienceType[]}) => (
  <section className="py-12 md:py-20">
    <SectionTitle>Experiences</SectionTitle>
    <p className="text-gray-400 mb-6">Here is a quick summary of my most recent experiences:</p>
    {experiences.map((job, index) => (
      <ExperienceCard key={index} {...job} />
    ))}
  </section>
);
