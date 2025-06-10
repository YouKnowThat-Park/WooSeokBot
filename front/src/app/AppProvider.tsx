"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeLayoutProvider from "./_components/ThemeLayoutProvider";

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <ThemeLayoutProvider>{children}</ThemeLayoutProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default AppProviders;
