import StoreNav from "./store-nav";

export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col mt-20">
      <StoreNav />
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
