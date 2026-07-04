import React from "react";
import { Category } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 py-8">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/category/${category.id}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-apple shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group relative border border-transparent hover:border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-12 h-12 flex items-center justify-center bg-apple-bg rounded-2xl mb-2 group-hover:bg-apple-blue group-hover:text-white transition-colors duration-300"
              >
                <Icon size={24} />
              </motion.div>
              <span className="text-[13px] font-medium text-apple-text-secondary group-hover:text-apple-text text-center transition-colors">
                {category.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
