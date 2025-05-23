"use client";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const RecoilProvider = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </RecoilRoot>
);

export default RecoilProvider;
