"use client";

import { Button } from "@/components/ui/button";
import { Home, Edit2, HelpCircle, User, Image, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
   <nav className="bg-background text-foreground rounded-2xl shadow-sm border px-4 py-2 flex items-center space-x-4 transition-colors duration-300">
  <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Home className="h-5 w-5 text-black" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Edit2 className="h-5 w-5 text-black" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <Image className="h-5 w-5 text-black" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="p-2 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
      >
        <HelpCircle className="h-5 w-5 text-black" />
      </Button>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <User className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="p-1 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <ChevronDown className="h-4 w-4 text-black" />
        </Button>
      </div>
    </nav>
  );
}
