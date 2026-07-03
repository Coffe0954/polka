"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Upload, ChevronRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export default function CreateAdPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const [step, setStep] = useState(1);

  return (
    <div className="py-8 md:py-12 bg-apple-bg min-h-[calc(100vh-80px)]">
      <Container className="max-w-[800px]">
        <div className="apple-card p-8 md:p-12">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">Разместить объявление</h1>
            <p className="text-apple-text-secondary">
              Шаг {step} из 3: Основная информация
            </p>
          </header>

          <div className="space-y-8">
            {/* Photo Upload Zone */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                Фотографии
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-apple-accent transition-all cursor-pointer group">
                <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="text-apple-accent" />
                </div>
                <p className="font-semibold text-lg">Нажмите или перетащите фото</p>
                <p className="text-apple-text-secondary text-sm mt-1">
                  До 10 фотографий в формате JPG или PNG
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                Название
              </label>
              <Input placeholder="Например: iPhone 15 Pro 256GB" className="bg-white border-2 border-gray-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Категория
                </label>
                <select className="w-full h-12 rounded-2xl bg-white border-2 border-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-apple-accent appearance-none">
                  <option>Выберите категорию</option>
                  <option>Электроника</option>
                  <option>Недвижимость</option>
                  <option>Транспорт</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Цена
                </label>
                <div className="relative">
                  <Input placeholder="0" className="bg-white border-2 border-gray-100 pr-12" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-apple-text-secondary">
                    ₽
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                Описание
              </label>
              <textarea
                className="w-full min-h-[150px] rounded-2xl bg-white border-2 border-gray-100 p-4 focus:outline-none focus:ring-2 focus:ring-apple-accent"
                placeholder="Подробно опишите ваш товар"
              ></textarea>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-apple-text uppercase tracking-wider">
                Локация
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-text-secondary h-5 w-5" />
                <Input placeholder="Город или точный адрес" className="bg-white border-2 border-gray-100 pl-12" />
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full gap-2 rounded-2xl">
                Продолжить
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
