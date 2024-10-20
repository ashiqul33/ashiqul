import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export const AboutSection = ({ about, image }: { about: { description: string[]; quickFacts: string[] }; image: string }) => {
  const { description, quickFacts } = about;
  return (
    <section className="py-12 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>About me</SectionTitle>
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <Image src={image} alt="Casual photo" width={400} height={300} className="rounded" />
              <div className="absolute -bottom-7 -left-7 w-full h-full border-l-20 border-b-20 border-gray-600"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-4xl font-bold text-white my-6">Curious about me? Here you have it:</h2>
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}
            <h3 className="text-2xl font-semibold text-white mb-4">Finally, some quick bits about me.</h3>
            <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
            <p className="text-gray-300 mt-6">
              One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I
              don&apos;t bite 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
