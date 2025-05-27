import { atom } from "recoil";

export const techModalAtom = atom<{
  isOpen: boolean;
  name?: string;
  imageUrl?: string;
}>({
  key: "techModalAtom",
  default: {
    isOpen: false,
    name: undefined,
    imageUrl: undefined,
  },
});
