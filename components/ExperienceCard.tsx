import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type experienceType = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export const ExperienceCard = ({ role, company, period, responsibilities }: experienceType) => (
  <Card className="bg-gray-800 border-gray-700 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <Image src="/placeholder.svg?height=60&width=60&text=Upwork" alt={company} width={60} height={60} className="mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-green-500">{company}</p>
          <p className="text-gray-400">{period}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        {responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
