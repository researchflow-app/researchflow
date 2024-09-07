import Header from "@/components/Home/Header";
import Sidebar from "@/components/Home/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col bg-muted/40">
        <Header />

        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
