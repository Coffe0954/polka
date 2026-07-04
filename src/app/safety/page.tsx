import React from "react";
import { Container } from "@/components/ui/Container";

export default function SafetyPage() {
  return (
    <div className="py-20 bg-apple-bg min-h-screen">
      <Container className="max-w-3xl">
        <div className="apple-card p-12 bg-white text-center">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Ваша безопасность</h1>
          <p className="text-apple-text-secondary mb-10 max-w-lg mx-auto">
            Мы делаем всё, чтобы покупки на Полке были безопасными. Следуйте простым правилам, чтобы защитить себя.
          </p>

          <div className="grid gap-4 text-left">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold mb-1">Не делайте предоплату</h3>
              <p className="text-apple-text-secondary text-sm">Оплачивайте товар только после того, как увидите его лично.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold mb-1">Общайтесь на Полке</h3>
              <p className="text-apple-text-secondary text-sm">Не переходите в сторонние мессенджеры, чтобы сохранить историю переписки.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
