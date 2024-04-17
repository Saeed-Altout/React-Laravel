import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { useStateContext } from "@/hooks/useStateContext";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navbar = () => {
  const { user, logout } = useStateContext();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/" />
            <AvatarFallback className="bg-primary">
              {user ? (
                <p className="text-primary-foreground">
                  {user?.user_name.split("")[0] || ""}
                </p>
              ) : (
                <User className="text-background h-5 w-5" />
              )}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </>
  );
};
