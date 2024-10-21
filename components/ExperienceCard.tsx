import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export type experienceType = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  logo: string;
};

export const ExperienceCard = ({ role, company, period, responsibilities, logo }: experienceType) => (
  <Card className="md:w-2/3 bg-gray-800 border-gray-700 mb-6">
    <CardContent className="p-6 md:flex">
      <div className="hidden md:flex mr-6">
        <Image src={logo} alt={company} width={200} height={50} className="object-contain" />
      </div>
      <div className="flex-grow">
        <div className="md:flex md:justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{role}</h3>
            <p className="text-green-500">{company}</p>
          </div>
          <p className="text-gray-400">{period}</p>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          {responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);
