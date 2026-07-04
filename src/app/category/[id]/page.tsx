"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/features/ProductCard";
import { CATEGORIES, MOCK_PRODUCTS } from "@/mocks/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;

  const category = CATEGORIES.find((c) => c.id === categoryId);

  // Filter products by category name (simple mock logic)
  const filteredProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === category?.name
  );

  if (!category) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold">Категория не найдена</h1>
        <Link href="/" className="text-apple-blue hover:underline mt-4 block">
          Вернуться на главную
        </Link>
      </Container>
    );
  }

  const Icon = category.icon;

  return (
    <div className="pb-20 pt-8">
      <Container>
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-apple-text-secondary hover:text-apple-text mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Назад на главную
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100">
                <Icon size={32} className="text-apple-blue" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-apple-text">
                  {category.name}
                </h1>
                <p className="text-apple-text-secondary mt-1">
                  Найдено {filteredProducts.length} объявлений
                </p>
              </div>
            </div>

            <Button variant="secondary" className="gap-2 rounded-2xl md:self-start">
              <SlidersHorizontal size={18} />
              Фильтры
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center bg-white rounded-[32px] border border-dashed border-gray-200"
          >
            <p className="text-apple-text-secondary">В этой категории пока нет товаров.</p>
            <Link href="/create">
              <Button className="mt-4">Станьте первым, кто подаст объявление</Button>
            </Link>
          </motion.div>
        )}
      </Container>
    </div>
  );
}
