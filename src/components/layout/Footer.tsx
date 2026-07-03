import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-apple-text mb-4 block">
              Полка
            </Link>
            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Премиальный маркетплейс, созданный с любовью к деталям и уважением к пользователю.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-apple-text mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-apple-text-secondary">
              <li><Link href="/" className="hover:text-apple-blue transition-colors">Главная</Link></li>
              <li><Link href="/create" className="hover:text-apple-blue transition-colors">Подать объявление</Link></li>
              <li><Link href="/categories" className="hover:text-apple-blue transition-colors">Все категории</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-apple-text mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-apple-text-secondary">
              <li><Link href="#" className="hover:text-apple-blue transition-colors">Помощь</Link></li>
              <li><Link href="#" className="hover:text-apple-blue transition-colors">Правила</Link></li>
              <li><Link href="#" className="hover:text-apple-blue transition-colors">Безопасность</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-apple-text mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-apple-text-secondary">
              <li><Link href="#" className="hover:text-apple-blue transition-colors">О нас</Link></li>
              <li><Link href="#" className="hover:text-apple-blue transition-colors">Блог</Link></li>
              <li><Link href="#" className="hover:text-apple-blue transition-colors">Карьера</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-apple-text-secondary">
          <p>© {currentYear} Полка. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-apple-text transition-colors">Конфиденциальность</Link>
            <Link href="#" className="hover:text-apple-text transition-colors">Условия</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
