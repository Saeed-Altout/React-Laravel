import { useState } from "react";
import { LogOut, LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStateContext } from "@/hooks/useStateContext";

import { LogoutModal } from "./modals/logout-modal";

import { routes } from "@/config";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
}

const NavItem = ({ href, icon: Icon }: NavItemProps) => {
  return (
    <li>
      <Button size="icon" variant="ghost" asChild>
        <a href={href}>
          <Icon className="h-4 w-4" />
        </a>
      </Button>
    </li>
  );
};

export const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { logout } = useStateContext();

  const onConfirm = async () => {
    try {
      setIsLoading(true);
      logout();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LogoutModal
        isLoading={isLoading}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={onConfirm}
      />

      <aside className="w-16 md:hidden flex border-r flex-col transition-all">
        <div className="min-h-16 h-16 flex justify-center items-center">
          <p className="text-3xl font-semibold">M</p>
        </div>
        <div className="py-2 flex justify-center items-start">
          <ul className="space-y-2">
            {routes.map(({ icon, href }, index) => (
              <NavItem key={index} icon={icon} href={href} />
            ))}
          </ul>
        </div>
        <div className="min-h-16 h-16 flex justify-center items-center mt-auto">
          <Button onClick={() => setIsOpen(true)} variant="outline" size="icon">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </aside>
    </>
  );
};
