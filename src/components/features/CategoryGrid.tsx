import React from "react";
import { Category } from "@/types";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 py-8">
      {categories.map((category) => (
        <button
          key={category.id}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-apple hover:shadow-md transition-all duration-300 group"
        >
          <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
            {category.icon}
          </span>
          <span className="text-sm font-medium text-apple-text-secondary group-hover:text-apple-text">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
