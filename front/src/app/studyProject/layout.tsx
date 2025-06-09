import ThemeToggle from "../_components/ThemeToggle";

export default function StudyProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed bottom-10 right-[100px] z-50">
        <ThemeToggle />
      </div>
      {children}
    </>
  );
}
