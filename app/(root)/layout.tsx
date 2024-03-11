import NavBar from "@/components/ui/navbar"
import SideBar from "@/components/ui/sidebar";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
        <NavBar/>
        <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
          <SideBar />
        </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
}
export default RootLayout;
