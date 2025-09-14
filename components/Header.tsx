"use client";

import { Button } from "@/components/ui/button";
import { Image, HelpCircle, Bell, User } from "lucide-react";
import Navbar from "./Navbar";
import { DarkModeToggle } from "./DarkModeToggle"; // ✅ import toggle

export default function Header() {
  return (
<header className="py-4 relative">
  <div className="max-w-full px-12 sm:px-6 lg:px-12 flex items-center justify-between relative z-10">
    {/* Left: Logo */}
    <div className="flex-1 flex items-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Krea AI
    </div>

    {/* Center: Navbar */}
    <div className="flex-1 flex justify-center">
      <Navbar />
    </div>

    {/* Right: Actions */}
    <div className="flex-1 flex items-center justify-end space-x-2">
      <HeaderButton
        icon={<Image className="h-5 w-5 text-foreground" />}
        label="Upload"
      />
      <HeaderButton
        icon={<HelpCircle className="h-5 w-5 text-foreground" />}
        label="Support"
      />
      <HeaderButton
        icon={<Bell className="h-5 w-5 text-foreground" />}
      />
      <HeaderButton
        icon={<User className="h-5 w-5 text-foreground" />}
      />
      <DarkModeToggle /> {/* ✅ toggle added */}
    </div>
  </div>
</header>

  );
}

const HeaderButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label?: string;
}) => (
  <Button
    variant="ghost"
    size="sm"
    className="flex items-center space-x-1 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md hover:scale-105 transition-all duration-200"
  >
    {icon}
    {label && <span className="text-sm">{label}</span>}
  </Button>
);
