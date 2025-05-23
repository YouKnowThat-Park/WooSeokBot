"use client";

import { RecoilRoot } from "recoil";
import type { ReactNode } from "react";

const RecoilProvider = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

export default RecoilProvider;
