import React from "react";
import { Category } from "@/types";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 py-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-apple hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-apple-bg rounded-2xl mb-2 group-hover:bg-apple-blue group-hover:text-white transition-colors duration-300">
              <Icon size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[13px] font-medium text-apple-text-secondary group-hover:text-apple-text text-center">
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
