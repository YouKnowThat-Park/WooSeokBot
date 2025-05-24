import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import RecoilProvider from "@/recoil/RecoilProvider";
import ThemeToggle from "./_components/ThemeToggle";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wooseok ChatBot",
  description:
    "박우석의 정보를 담고 있는 챗봇이며 포트폴리오 페이지 대신해서 만들었습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.className} antialiased  bg-white dark:bg-[#3A3A3A] `}
      >
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
