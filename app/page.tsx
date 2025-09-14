"use client";

import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ToolGrid from "@/components/ToolGrid";

import { tools } from "@/app/src/data";
import { carouselItems } from "@/app/src/data";

export default function HomePage() {
  return (
    <main className="max-w-full py-8 space-y-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Carousel Section */}
      <Carousel />

      {/* Tools / Generate Section */}
      <section className="w-full sm:px-10">
        <ToolGrid tools={tools} />
      </section>
    </main>
  );
}
