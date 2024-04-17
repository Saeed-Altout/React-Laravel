import { Navbar } from "@/components/Navbar";
import { SidebarDesktop } from "@/components/sidebar-desktop";
import { SidebarMobile } from "@/components/sidebar-mobile";
import { useStateContext } from "@/hooks/useStateContext";
import { Navigate, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />
      <div className="grow flex-1 flex flex-col transition-all">
        <nav className="min-h-16 h-16 px-4 transition-all border-b flex justify-end items-center">
          <Navbar />
        </nav>
        <main className="flex flex-1 transition-all h-[calc(100vh-64px)]">
          <div className="overflow-auto px-4 py-2 w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
