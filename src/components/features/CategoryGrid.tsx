import React from "react";
import { Category } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="category-navigation-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 py-8">
      {categories.map((category, index) => {
        const CategoryIcon = category.icon;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="category-item-wrapper h-full"
          >
            <Link
              href={`/category/${category.id}`}
              className="category-link-container flex flex-col items-center justify-center p-4 bg-white rounded-apple shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group relative border border-transparent hover:border-gray-100 h-full min-h-[140px]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="category-icon-box w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl mb-3 group-hover:bg-gray-100 text-apple-text transition-colors duration-300"
              >
                <CategoryIcon className="category-icon" size={24} strokeWidth={2} />
              </motion.div>
              <span className="category-name-label text-[13px] font-semibold text-apple-text-secondary group-hover:text-apple-text text-center transition-colors leading-tight px-1">
                {category.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
