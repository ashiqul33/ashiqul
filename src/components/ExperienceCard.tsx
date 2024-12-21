import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";

export type experienceType = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  logo: string;
};

export const ExperienceCard = memo(({ role, company, period, responsibilities, logo }: experienceType) => (
  <Card className="mb-6 border-gray-700 bg-gray-800 md:w-2/3">
    <CardContent className="p-6 md:flex">
      <div className="mr-6 hidden md:flex">
        <Image src={logo} alt={company} width={200} height={50} className="object-contain" />
      </div>
      <div className="flex-grow">
        <div className="mb-4 items-start md:flex md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{role}</h3>
            <p className="text-green-500">{company}</p>
          </div>
          <p className="text-gray-400">{period}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-gray-300">
          {responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
));

ExperienceCard.displayName = "ExperienceCard";
