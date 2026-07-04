"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Upload, ChevronRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuthentication } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/lib/toast-context";

export default function CreateAdPage() {
  const { isAuthenticated } = useAuthentication();
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      showToast("Объявление успешно опубликовано!", "success");
      router.push("/profile");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="create-ad-page-container py-8 md:py-12 bg-apple-bg min-h-[calc(100vh-80px)]">
      <Container className="max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ad-creation-form-surface premium-content-card p-8 md:p-12 bg-white"
        >
          <header className="ad-creation-header mb-10 text-center">
            <h1 className="form-main-title text-3xl font-bold mb-2 tracking-tight">Разместить объявление</h1>

            <nav className="step-progress-indicator flex justify-center gap-2 mt-4" aria-label="Прогресс заполнения">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`step-bar-segment h-1.5 w-12 rounded-full transition-all duration-500 ${
                    stepNumber <= currentStep ? "bg-apple-blue" : "bg-gray-200"
                  }`}
                />
              ))}
            </nav>

            <p className="step-description-label text-apple-text-secondary mt-4 text-sm font-medium">
              Шаг {currentStep} из 3: {
                currentStep === 1 ? "Основная информация" :
                currentStep === 2 ? "Подробности" : "Контакты"
              }
            </p>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="step-content-wrapper space-y-8"
            >
              {/* Photo Upload Area */}
              <section className="photo-upload-section space-y-4">
                <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Фотографии
                </label>
                <div className="photo-dropzone-box border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-apple-accent transition-all cursor-pointer group">
                  <div className="upload-icon-container h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="upload-icon text-apple-accent" />
                  </div>
                  <p className="upload-prompt-text font-semibold text-lg">Нажмите или перетащите фото</p>
                  <p className="upload-constraints-hint text-apple-text-secondary text-sm mt-1">
                    До 10 фотографий в формате JPG или PNG
                  </p>
                </div>
              </section>

              <div className="product-title-input-group space-y-4">
                <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Название
                </label>
                <Input
                  placeholder="Например: iPhone 15 Pro 256GB"
                  className="ad-title-input bg-white border-2 border-gray-100"
                />
              </div>

              <div className="category-and-price-row grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="category-selection-group space-y-4">
                  <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                    Категория
                  </label>
                  <select className="category-dropdown-select w-full h-12 rounded-2xl bg-white border-2 border-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-apple-accent appearance-none">
                    <option>Выберите категорию</option>
                    <option>Электроника</option>
                    <option>Недвижимость</option>
                    <option>Транспорт</option>
                  </select>
                </div>

                <div className="price-input-group space-y-4">
                  <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                    Цена
                  </label>
                  <div className="price-input-wrapper relative">
                    <Input
                      placeholder="0"
                      className="ad-price-input bg-white border-2 border-gray-100 pr-12"
                    />
                    <span className="currency-symbol absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-apple-text-secondary">
                      ₽
                    </span>
                  </div>
                </div>
              </div>

              <div className="description-input-group space-y-4">
                <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Описание
                </label>
                <textarea
                  className="ad-description-textarea w-full min-h-[150px] rounded-2xl bg-white border-2 border-gray-100 p-4 focus:outline-none focus:ring-2 focus:ring-apple-accent"
                  placeholder="Подробно опишите ваш товар"
                ></textarea>
              </div>

              <div className="location-input-group space-y-4">
                <label className="section-input-label text-sm font-semibold text-apple-text uppercase tracking-wider">
                  Локация
                </label>
                <div className="location-field-wrapper relative">
                  <MapPin className="location-field-icon absolute left-4 top-1/2 -translate-y-1/2 text-apple-text-secondary h-5 w-5" />
                  <Input
                    placeholder="Город или точный адрес"
                    className="ad-location-input bg-white border-2 border-gray-100 pl-12"
                  />
                </div>
              </div>

              <footer className="form-action-footer pt-6 flex gap-4">
                {currentStep > 1 && (
                  <Button
                    variant="secondary"
                    size="lg"
                    className="back-step-button flex-1 rounded-2xl"
                    onClick={handlePreviousStep}
                  >
                    Назад
                  </Button>
                )}
                <Button
                  size="lg"
                  className="next-step-button flex-[2] gap-2 rounded-2xl"
                  onClick={handleNextStep}
                >
                  {currentStep === 3 ? "Опубликовать" : "Продолжить"}
                  <ChevronRight className="arrow-icon" size={20} />
                </Button>
              </footer>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </main>
  );
}
