import { LogOut, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/config";

interface NavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

const NavItem = ({ href, label, icon: Icon }: NavItemProps) => {
  return (
    <li>
      <Button
        size="sm"
        variant="ghost"
        asChild
        className="w-full flex justify-start"
      >
        <a href={href}>
          <Icon className="h-4 w-4 mr-2" />
          {label}
        </a>
      </Button>
    </li>
  );
};

export const SidebarDesktop = () => {
  return (
    <aside className="w-72 md:flex hidden border-r flex-col transition-all">
      <div className="min-h-16 h-16 flex justify-center items-center">
        <p className="text-3xl font-semibold">MicroTech</p>
      </div>
      <div className="py-2 flex justify-center items-start">
        <ul className="w-full px-4 space-y-3">
          {routes.map(({ label, icon, href }, index) => (
            <NavItem key={index} label={label} icon={icon} href={href} />
          ))}
        </ul>
      </div>
      <div className="min-h-16 h-16 flex justify-center items-center mt-auto px-4">
        <ul className="w-full px-4 space-y-1">
          <li>
            <Button variant="destructive" size="icon" className="w-full">
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
