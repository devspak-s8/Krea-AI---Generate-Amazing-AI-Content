"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselItems } from "@/app/src/data"; // ✅ fixed path

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    if (index < 0) return;
    if (index >= carouselItems.length) return;
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden sm:pl-6 md:pl-10">
      <div className="flex items-center justify-center relative">
        <div className="relative w-full max-w-full">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-out gap-6 md:gap-12"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }} // ✅ full width responsive slide
          >
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <div
                  className="h-[20rem] sm:h-[28rem] md:h-[33rem] bg-cover bg-center relative rounded-2xl shadow-lg"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50 dark:bg-black/60 rounded-2xl" />

                  {/* Title at center */}
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-white text-center drop-shadow-lg">
                      {item.title}
                    </h1>
                  </div>

                  {/* Bottom section */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 p-6 sm:p-8">
                    {/* Left: Subtitle + description */}
                    <div className="text-white max-w-md">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 opacity-90">
                        {item.subtitle}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Button */}
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      {item.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between mt-4 md:mt-6 mb-2 md:mb-4 w-full">
            {/* Centered Dots */}
            <div className="flex justify-center flex-1 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gray-800 dark:bg-white scale-125"
                      : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Arrows on the far right */}
            <div className="flex mr-2 sm:mr-6 space-x-2">
              <button
                className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
                onClick={() => goToSlide(currentSlide - 1)}
              >
                <ChevronLeft className="h-5 w-5 text-black dark:text-white" />
              </button>
              <button
                className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
                onClick={() => goToSlide(currentSlide + 1)}
              >
                <ChevronRight className="h-5 w-5 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
