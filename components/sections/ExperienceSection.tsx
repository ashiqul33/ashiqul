import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceCard, experienceType } from "@/components/ExperienceCard";

export const ExperienceSection = ({ experiences }: { experiences: experienceType[] }) => (
  <section className="bg-gray-900 py-12 md:py-24" id="experiences">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle>Experiences 👨🏻‍💻</SectionTitle>
      <p className="mb-8 text-center text-gray-400">Here is a quick summary of my most recent experiences:</p>
      <div className="flex flex-col items-center gap-6">
        {experiences.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>
    </div>
  </section>
);
