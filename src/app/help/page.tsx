import React from "react";
import { Container } from "@/components/ui/Container";

export default function HelpPage() {
  return (
    <div className="py-20 bg-apple-bg min-h-screen">
      <Container className="max-w-3xl">
        <div className="apple-card p-12 bg-white">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Помощь</h1>
          <div className="grid gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold mb-2 text-lg">Как создать объявление?</h3>
              <p className="text-apple-text-secondary text-sm">
                Нажмите кнопку «Подать объявление» в шапке сайта, загрузите фото и заполните описание.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold mb-2 text-lg">Как изменить профиль?</h3>
              <p className="text-apple-text-secondary text-sm">
                Перейдите в личный кабинет и нажмите «Редактировать профиль».
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold mb-2 text-lg">Служба поддержки</h3>
              <p className="text-apple-text-secondary text-sm">
                Если у вас остались вопросы, напишите нам на support@polka.ru
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
