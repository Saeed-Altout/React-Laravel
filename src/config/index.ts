import {
  Code,
  Layers,
  Layout,
  Settings,
  Square,
  Tag,
  Users,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: Layout,
    href: "/",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Technologies",
    icon: Code,
    href: "/technologies",
  },
  {
    label: "Tools-kit",
    icon: Layers,
    href: "/toolkit",
  },
  {
    label: "Platforms",
    icon: Square,
    href: "/platforms",
  },
  {
    label: "Works Type",
    icon: Tag,
    href: "/workTypes",
  },
  {
    label: "Members",
    icon: Users,
    href: "/members",
  },
];
