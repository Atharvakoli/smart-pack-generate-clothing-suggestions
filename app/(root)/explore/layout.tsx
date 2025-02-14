import ExploreNav from "./ExploreNav";

export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col mt-20">
      <ExploreNav />
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
