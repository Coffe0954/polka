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
    <main className="registration-page-container min-h-[calc(100vh-80px)] flex items-center justify-center py-12 bg-apple-bg">
      <Container className="registration-form-container max-w-md">
        <article className="registration-card premium-content-card p-8 md:p-12 bg-white">
          <Link
            href="/"
            className="back-to-home-link inline-flex items-center gap-2 text-sm text-apple-text-secondary hover:text-apple-text mb-8 transition-colors"
          >
            <ArrowLeft className="back-arrow-icon" size={16} />
            Вернуться на главную
          </Link>

          <header className="registration-header mb-8">
            <h1 className="registration-main-title text-3xl font-bold tracking-tight mb-2">Создать аккаунт</h1>
            <p className="registration-subtitle text-apple-text-secondary">
              Присоединяйтесь к сообществу Полки сегодня.
            </p>
          </header>

          <form className="registration-form-element space-y-4" onSubmit={handleRegistrationFormSubmit}>
            <div className="name-field-wrapper">
              <label className="input-field-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Имя
              </label>
              <Input
                placeholder="Иван Иванов"
                className="registration-name-input h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                required
              />
            </div>

            <div className="email-field-wrapper">
              <label className="input-field-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="registration-email-input h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                required
              />
            </div>

            <div className="password-field-wrapper">
              <label className="input-field-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Пароль
              </label>
              <Input
                type="password"
                placeholder="Минимум 8 символов"
                className="registration-password-input h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                required
              />
            </div>

            <p className="legal-disclaimer-text text-[11px] text-apple-text-secondary leading-relaxed px-1">
              Регистрируясь, вы соглашаетесь с нашими{" "}
              <button type="button" className="legal-link text-apple-blue hover:underline">Условиями использования</button>{" "}
              и{" "}
              <button type="button" className="legal-link text-apple-blue hover:underline">Политикой конфиденциальности</button>.
            </p>

            <Button type="submit" className="registration-submit-button w-full h-12 rounded-2xl text-base font-semibold mt-4">
              Зарегистрироваться
            </Button>
          </form>

          <footer className="registration-footer mt-8 pt-8 border-t border-gray-100 text-center text-sm">
            <span className="has-account-prompt text-apple-text-secondary">Уже есть аккаунт? </span>
            <Link href="/login" className="login-redirect-link text-apple-blue font-semibold hover:underline">
              Войти
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}
