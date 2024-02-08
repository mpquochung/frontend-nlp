'use client';

import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';
import { UserProvider } from './UserContext';

export default function Provider({ children }: { children: React.ReactNode }) {
  
  
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </UserProvider>
  );
}
