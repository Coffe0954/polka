"use client";

import { Container } from "@/components/ui/Container";
import { CategoryGrid } from "@/components/features/CategoryGrid";
import { ProductCard } from "@/components/features/ProductCard";
import { CATEGORIES, MOCK_PRODUCTS } from "@/mocks/data";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-[#1d1d1f] text-white">
        <Container className="relative z-10 flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold mb-6 border border-white/10">
              <Sparkles size={14} className="text-apple-blue" />
              <span>Будущее покупок уже здесь</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Вещи с историей. <br />
              <span className="text-gray-400">В новом свете.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg">
              Полка — это не просто маркетплейс. Это пространство, где каждая вещь находит свой идеальный дом.
            </p>
            <div className="flex gap-4">
              <Link href="/create">
                <Button size="lg" className="rounded-full px-8">
                  Начать продавать
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 rounded-full px-8 gap-2">
                Узнать больше
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </Container>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-apple-blue/20 blur-[120px] rounded-full" />
      </section>

      <Container>
        {/* Categories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-[-40px] relative z-20"
        >
          <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl shadow-black/5 border border-white">
            <CategoryGrid categories={CATEGORIES} />
          </div>
        </motion.section>

        {/* Hero / Recommendation Title */}
        <section className="mt-16 mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight">
              Рекомендации для вас
            </h2>
            <p className="text-apple-text-secondary mt-2">Основано на ваших интересах</p>
          </div>
          <Link href="#" className="text-apple-blue font-semibold hover:underline flex items-center gap-1">
            Показать все
            <ArrowRight size={16} />
          </Link>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </Container>
    </div>
  );
}
