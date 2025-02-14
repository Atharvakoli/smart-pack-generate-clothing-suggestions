import PreferenceNav from "./PreferenceNav";


export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col mt-8">
      <PreferenceNav />
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
