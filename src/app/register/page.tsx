"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft } from "lucide-react";
import { useAuthentication } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/lib/toast-context";

export default function RegisterPage() {
  const { signIn } = useAuthentication();
  const router = useRouter();

  const { showToast } = useToast();
  const handleRegistrationFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signIn();
    showToast("Добро пожаловать в Полку!", "success");
    router.push("/profile");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12">
      <Container className="max-w-md">
        <div className="apple-card p-8 md:p-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-apple-text-secondary hover:text-apple-text mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Вернуться на главную
          </Link>

          <h1 className="text-3xl font-bold tracking-tight mb-2">Создать аккаунт</h1>
          <p className="text-apple-text-secondary mb-8">
            Присоединяйтесь к сообществу Полки сегодня.
          </p>

          <form className="space-y-4" onSubmit={handleRegistrationFormSubmit}>
            <div>
              <label className="block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Имя
              </label>
              <Input
                placeholder="Иван Иванов"
                className="h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Пароль
              </label>
              <Input
                type="password"
                placeholder="Минимум 8 символов"
                className="h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
              />
            </div>

            <p className="text-[11px] text-apple-text-secondary leading-relaxed px-1">
              Регистрируясь, вы соглашаетесь с нашими{" "}
              <button type="button" className="text-apple-blue hover:underline">Условиями использования</button>{" "}
              и{" "}
              <button type="button" className="text-apple-blue hover:underline">Политикой конфиденциальности</button>.
            </p>

            <Button type="submit" className="w-full h-12 rounded-2xl text-base font-semibold mt-4">
              Зарегистрироваться
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm">
            <span className="text-apple-text-secondary">Уже есть аккаунт? </span>
            <Link href="/login" className="text-apple-blue font-semibold hover:underline">
              Войти
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
