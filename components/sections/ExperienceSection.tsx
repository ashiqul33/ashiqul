import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceCard, experienceType } from "@/components/ExperienceCard";

export const ExperienceSection = ({ experiences }: { experiences: experienceType[] }) => (
  <section className="py-12 md:py-24" id="experiences">
    <div className="container mx-auto px-4">
      <SectionTitle>Experiences 👨🏻‍💻</SectionTitle>
      <p className="text-gray-400 text-center mb-8">Here is a quick summary of my most recent experiences:</p>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>
    </div>
  </section>
);
