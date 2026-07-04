import React from "react";
import { Container } from "@/components/ui/Container";

export default function RulesPage() {
  return (
    <div className="py-20 bg-apple-bg min-h-screen">
      <Container className="max-w-3xl">
        <div className="apple-card p-12 bg-white">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Правила Полки</h1>
          <div className="prose prose-apple">
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
              <p className="text-apple-text-secondary leading-relaxed">
                Полка — это площадка для размещения объявлений о товарах, услугах, вакансиях и других предложениях.
                Мы стремимся создать безопасную и приятную среду для всех пользователей.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">2. Запрещенные товары</h2>
              <ul className="list-disc pl-5 text-apple-text-secondary space-y-2">
                <li>Оружие и боеприпасы</li>
                <li>Наркотические вещества</li>
                <li>Алкоголь и табачные изделия</li>
                <li>Подделки и реплики брендов</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Требования к объявлениям</h2>
              <p className="text-apple-text-secondary leading-relaxed">
                Фотографии должны быть качественными и соответствовать реальному состоянию товара.
                Описание должно быть правдивым и полным.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
