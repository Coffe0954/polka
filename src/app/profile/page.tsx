"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { User, Package, Heart, Star, CheckCircle, X, Camera, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { isLoggedIn, user, logout, updateUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tempName, setTempName] = useState(user?.name || "");
  const [tempBio, setTempBio] = useState(user?.bio || "");

  const handleSave = () => {
    updateUser({ name: tempName, bio: tempBio });
    setIsEditModalOpen(false);
  };

  if (!user) return null;

  return (
    <div className="py-8 md:py-12 relative">
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
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <div className="flex items-center gap-1 text-apple-text-secondary mt-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">Новый продавец</span>
                  </div>
                </div>
              </div>

              {user.bio && (
                <p className="text-sm text-apple-text-secondary mb-6 line-clamp-3">
                  {user.bio}
                </p>
              )}

              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex justify-between text-sm">
                  <span className="text-apple-text-secondary">На Полке с</span>
                  <span className="font-medium">{user.joinedDate}</span>
                </div>
                {user.isVerified ? (
                  <div className="flex items-center gap-1.5 text-green-600">
                    <span className="text-sm font-semibold">Подтвержденный аккаунт</span>
                    <CheckCircle size={14} className="fill-green-600 text-white" />
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-red-500">
                    <span className="text-sm font-semibold">Профиль не подтвержден</span>
                    <X size={14} className="fill-red-500 text-white rounded-full p-0.5" />
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                className="w-full mt-8"
                onClick={() => setIsEditModalOpen(true)}
              >
                Редактировать профиль
              </Button>

              <Button
                variant="ghost"
                className="w-full mt-2 text-red-500 hover:text-red-600 hover:bg-red-50 gap-2"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                <LogOut size={16} />
                Выйти
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

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Редактировать профиль</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <button className="absolute inset-0 bg-black/20 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={24} />
                  </button>
                </div>
                <button className="text-sm font-medium text-apple-blue hover:underline">
                  Изменить фото
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                    Имя
                  </label>
                  <Input
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    placeholder="Ваше имя"
                    className="h-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                    О себе
                  </label>
                  <textarea
                    value={tempBio}
                    onChange={(e) => setTempBio(e.target.value)}
                    placeholder="Расскажите немного о себе"
                    className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20 text-sm min-h-[100px] resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="secondary"
                  className="flex-1 rounded-2xl h-12"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Отмена
                </Button>
                <Button
                  className="flex-1 rounded-2xl h-12"
                  onClick={handleSave}
                >
                  Сохранить
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
