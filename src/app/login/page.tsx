"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
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

          <h1 className="text-3xl font-bold tracking-tight mb-2">С возвращением</h1>
          <p className="text-apple-text-secondary mb-8">
            Войдите в свой аккаунт Полки, чтобы продолжить.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                placeholder="••••••••"
                className="h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
              />
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-sm text-apple-blue hover:underline">
                Забыли пароль?
              </button>
            </div>

            <Button type="submit" className="w-full h-12 rounded-2xl text-base font-semibold mt-4">
              Войти
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm">
            <span className="text-apple-text-secondary">Нет аккаунта? </span>
            <Link href="/register" className="text-apple-blue font-semibold hover:underline">
              Создать аккаунт
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
