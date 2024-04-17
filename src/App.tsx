import { ThemeProvider } from "./providers/theme-provider";
import { SidebarMobile } from "./components/sidebar-mobile";
import { SidebarDesktop } from "./components/sidebar-desktop";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarDesktop />
        <SidebarMobile />
        <div className="grow flex-1 flex flex-col transition-all">
          <nav className="min-h-16 h-16 px-4 transition-all border-b flex justify-end items-center">
            <Navbar />
          </nav>
          <main className="flex flex-1 transition-all h-[calc(100vh-64px)]">
            <div className="overflow-auto px-4 py-2">Home</div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
