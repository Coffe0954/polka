"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft } from "lucide-react";
import { useAuthentication } from "@/lib/auth-context";
import { useToast } from "@/lib/toast-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { signIn } = useAuthentication();
  const { showToast } = useToast();
  const router = useRouter();

  const handleLoginFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate login with unverified status to demonstrate the previous requirement
    signIn({ isAccountVerified: false });
    showToast("Вы успешно вошли", "success");
    router.push("/profile");
  };

  return (
    <main className="login-page-container min-h-[calc(100vh-80px)] flex items-center justify-center py-12 bg-apple-bg">
      <Container className="login-form-container max-w-md">
        <article className="login-card premium-content-card p-8 md:p-12 bg-white">
          <Link
            href="/"
            className="back-to-home-link inline-flex items-center gap-2 text-sm text-apple-text-secondary hover:text-apple-text mb-8 transition-colors"
          >
            <ArrowLeft className="back-arrow-icon" size={16} />
            Вернуться на главную
          </Link>

          <header className="login-header mb-8">
            <h1 className="login-main-title text-3xl font-bold tracking-tight mb-2">С возвращением</h1>
            <p className="login-subtitle text-apple-text-secondary">
              Войдите в свой аккаунт Полки, чтобы продолжить.
            </p>
          </header>

          <form className="login-form-element space-y-4" onSubmit={handleLoginFormSubmit}>
            <div className="email-field-wrapper">
              <label className="input-field-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="login-email-input h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                required
              />
            </div>

            <div className="password-field-wrapper">
              <label className="input-field-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                Пароль
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="login-password-input h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                required
              />
            </div>

            <div className="forgot-password-container flex justify-end">
              <button type="button" className="forgot-password-button text-sm text-apple-blue hover:underline">
                Забыли пароль?
              </button>
            </div>

            <Button type="submit" className="login-submit-button w-full h-12 rounded-2xl text-base font-semibold mt-4">
              Войти
            </Button>
          </form>

          <footer className="login-footer mt-8 pt-8 border-t border-gray-100 text-center text-sm">
            <span className="no-account-prompt text-apple-text-secondary">Нет аккаунта? </span>
            <Link href="/register" className="register-redirect-link text-apple-blue font-semibold hover:underline">
              Создать аккаунт
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}
