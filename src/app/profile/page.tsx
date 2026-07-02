import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { User, Package, Heart, Archive, Star } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / User Info */}
          <aside className="w-full lg:w-1/3">
            <div className="apple-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                  <User size={40} className="text-gray-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Александр</h1>
                  <div className="flex items-center gap-1 text-apple-text-secondary mt-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9 • 24 отзыва</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex justify-between text-sm">
                  <span className="text-apple-text-secondary">На Полке с</span>
                  <span className="font-medium">Марта 2022</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-apple-text-secondary">Проверено</span>
                  <span className="text-green-600 font-medium">Паспорт, Телефон</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-8">
                Редактировать профиль
              </Button>
            </div>
          </aside>

          {/* Main Content / Tabs */}
          <main className="flex-1">
            <div className="flex gap-4 p-1 bg-gray-100 w-fit rounded-2xl mb-8">
              <button className="px-6 py-2 bg-white rounded-xl shadow-sm font-medium text-sm">
                Мои объявления
              </button>
              <button className="px-6 py-2 text-apple-text-secondary font-medium text-sm hover:text-apple-text transition-colors">
                Избранное
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="apple-card p-6 flex flex-col items-center justify-center text-center py-20 bg-white/50 border-2 border-dashed border-gray-200 shadow-none">
                <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  <Package className="text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold">У вас пока нет объявлений</h3>
                <p className="text-apple-text-secondary text-sm mt-2 max-w-xs">
                  Продайте что-нибудь ненужное прямо сейчас и заработайте на этом.
                </p>
                <Button className="mt-6">Разместить объявление</Button>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
