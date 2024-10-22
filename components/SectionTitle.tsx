import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="mb-8 flex justify-center">
    <h2 className="inline-block rounded-full bg-gray-700 px-4 py-2 text-sm font-bold text-white">{children}</h2>
  </div>
);
