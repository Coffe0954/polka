import React from "react";
import { Container } from "@/components/ui/Container";

export default function GenericInfoPage() {
  return (
    <div className="py-20 bg-apple-bg min-h-screen">
      <Container className="max-w-3xl">
        <div className="apple-card p-12 bg-white">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Информация</h1>
          <p className="text-apple-text-secondary leading-relaxed">
            Данная страница находится в разработке. Скоро здесь появится подробная информация.
          </p>
        </div>
      </Container>
    </div>
  );
}
