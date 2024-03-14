import NavBar from "@/components/ui/navbar"
import SideBar from "@/components/ui/sidebar";
import { checkSubscription } from "@/lib/subscription";

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isPro = await checkSubscription()
  return (
    <div className="h-full">
        <NavBar isPro={isPro}/>
        <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
          <SideBar isPro={isPro} />
        </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
}
export default RootLayout;
