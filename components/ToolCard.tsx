"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tool } from "@/app/src/types";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="w-full group shadow-none bg-none border-none transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between gap-x-4">
          {/* Column 1: Icon */}
          <div className={`w-14 h-14 rounded-xl ${tool.color} flex mt-2 items-center justify-center text-xl`}>
            {tool.icon}
          </div>

          {/* Column 2: Title + Badges + Description */}
          <div className="gap-2 flex-1">
            <div className="flex items-center gap-6">
              <h3 className="font-semibold text-lg text-foreground">{tool.name}</h3>
              {tool.isNew && <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">NEW</Badge>}
              {tool.isPro && <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">PRO</Badge>}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
          </div>

          {/* Column 3: Button */}
          <div className="flex items-center">
            <Button variant="outline" className=" rounded-full transition-colors">Open</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
