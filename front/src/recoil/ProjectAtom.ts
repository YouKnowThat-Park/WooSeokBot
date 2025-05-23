import { atom } from "recoil";

export const activeProjectAtom = atom<string | null>({
  key: "activeProjectAtom",
  default: null,
});
