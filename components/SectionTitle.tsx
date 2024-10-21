import { ReactNode } from 'react'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center mb-8">
    <h2 className="inline-block text-sm font-bold text-white px-4 py-2 bg-gray-700 rounded-full">
      {children}
    </h2>
  </div>
);
