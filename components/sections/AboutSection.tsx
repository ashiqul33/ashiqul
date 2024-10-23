import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export const AboutSection = ({ about, image }: { about: { description: string[]; quickFacts: string[] }; image: string }) => {
  const { description, quickFacts } = about;
  return (
    <section className="bg-gray-900 py-12 md:py-24" id="about">
      <div className="container mx-auto px-8">
        <SectionTitle>About me</SectionTitle>
        <div className="flex flex-col items-start md:flex-row">
          <div className="mb-8 flex md:mb-0 md:w-2/5">
            <div className="relative">
              <Image src={image} alt="Casual photo" width={400} height={300} className="rounded" />
              <div className="absolute -bottom-7 -left-7 h-full w-full border-b-20 border-l-20 border-gray-600"></div>
            </div>
          </div>
          <div className="md:w-3/5 md:pl-10">
            <h2 className="my-6 text-4xl font-bold text-white">Curious about me? Here you have it:</h2>
            {description.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-300">
                {paragraph}
              </p>
            ))}
            <h3 className="mb-4 text-2xl font-semibold text-white">Finally, some quick bits about me.</h3>
            <ul className="grid list-inside list-disc grid-cols-1 gap-4 text-gray-300 md:grid-cols-2">
              {quickFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
            <p className="mt-6 text-gray-300">
              One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise, I
              don&apos;t bite 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
