import Image from "next/image";

export const SkillIcon = ({ skill }: { skill: string }) => (
  <div className="bg-gray-800 p-2 rounded-lg">
    <Image src={`/placeholder.svg?height=40&width=40&text=${skill}`} alt={skill} width={40} height={40} />
  </div>
);
