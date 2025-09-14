"use client";

import { Button } from "@/components/ui/button";
import {
  Home,
  Edit2,
  HelpCircle,
  User,
  Image,
  ChevronDown,
  MessageSquare,
  LayoutDashboard,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-background text-foreground rounded-2xl shadow-sm border px-6 py-2 flex items-center space-x-4 transition-colors duration-300">
      {/* Home */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Home className="h-5 w-5 text-foreground" />
      </Button>

      {/* Edit / Create */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Edit2 className="h-5 w-5 text-foreground" />
      </Button>

      {/* Media */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Image className="h-5 w-5 text-foreground" />
      </Button>

      {/* Help */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <HelpCircle className="h-5 w-5 text-foreground" />
      </Button>

      {/* Dashboard */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <LayoutDashboard className="h-5 w-5 text-foreground" />
      </Button>

      {/* Messages */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <MessageSquare className="h-5 w-5 text-foreground" />
      </Button>

      {/* Settings */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Settings className="h-5 w-5 text-foreground" />
      </Button>

      {/* Notifications */}
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Bell className="h-5 w-5 text-foreground" />
      </Button>

      {/* Profile dropdown */}
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-accent hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <User className="h-5 w-5 text-foreground" />
        </Button>
     
      </div>

    </nav>
  );
}
