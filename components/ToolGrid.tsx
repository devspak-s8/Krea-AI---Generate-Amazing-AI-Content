"use client";
import ToolCard from "./ToolCard";
import { Tool } from "@/app/src/types";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowDown } from "lucide-react";
export default function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Generate</h2>

        {/* View All Button */}
        <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
       <ArrowDown className="ml-2 h-4 w-4" />   View all
          
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </>
  );
}
