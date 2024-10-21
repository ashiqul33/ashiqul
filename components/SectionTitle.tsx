import { ReactNode } from 'react'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-white mb-6">{children}</h2>
);
