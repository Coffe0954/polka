"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { User, Package, Heart, Star, CheckCircle, X, Camera, LogOut } from "lucide-react";
import { useAuthentication } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { isAuthenticated, currentUser, signOut, updateProfile } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [profileFormName, setProfileFormName] = useState(currentUser?.fullName || "");
  const [profileFormBio, setProfileFormBio] = useState(currentUser?.bio || "");

  const handleSaveProfileUpdates = () => {
    updateProfile({ fullName: profileFormName, bio: profileFormBio });
    setIsEditProfileModalOpen(false);
  };

  if (!currentUser) return null;

  return (
    <div className="profile-dashboard-layout py-8 md:py-12 relative bg-apple-bg min-h-screen">
      <Container className="profile-content-grid">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* User Identity Sidebar */}
          <aside className="user-profile-sidebar w-full lg:w-1/3">
            <div className="user-info-card premium-content-card p-6 md:p-8">
              <div className="user-avatar-section flex items-center gap-4 mb-6">
                <div className="user-avatar-image-container h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                  <User size={40} className="user-avatar-placeholder-icon text-gray-400" />
                </div>
                <div className="user-name-and-rating">
                  <h1 className="user-full-name text-2xl font-bold">{currentUser.fullName}</h1>
                  <div className="user-rating-badge flex items-center gap-1 text-apple-text-secondary mt-1">
                    <Star size={14} className="rating-star-icon fill-yellow-400 text-yellow-400" />
                    <span className="rating-text-label text-sm font-medium">Новый продавец</span>
                  </div>
                </div>
              </div>

              {currentUser.bio && (
                <p className="user-bio-description text-sm text-apple-text-secondary mb-6 line-clamp-3">
                  {currentUser.bio}
                </p>
              )}

              <div className="user-metadata-details space-y-4 pt-4 border-t border-gray-50">
                <div className="metadata-row flex justify-between text-sm">
                  <span className="metadata-label text-apple-text-secondary">На Полке с</span>
                  <span className="metadata-value font-medium">{currentUser.registrationDate}</span>
                </div>
                {currentUser.isAccountVerified ? (
                  <div className="verification-status-verified flex items-center gap-1.5 text-green-600">
                    <span className="status-text text-sm font-semibold">Подтвержденный аккаунт</span>
                    <CheckCircle size={14} className="status-checkmark-icon fill-green-600 text-white" />
                  </div>
                ) : (
                  <div className="verification-status-unverified flex items-center gap-1.5 text-red-500">
                    <span className="status-text text-sm font-semibold">Профиль не подтвержден</span>
                    <X size={14} className="status-error-icon fill-red-500 text-white rounded-full p-0.5" />
                  </div>
                )}
              </div>

              <div className="sidebar-action-group space-y-2 mt-8">
                <Button
                  variant="outline"
                  className="edit-profile-trigger-button w-full"
                  onClick={() => setIsEditProfileModalOpen(true)}
                >
                  Редактировать профиль
                </Button>

                <Button
                  variant="ghost"
                  className="user-logout-button w-full text-red-500 hover:text-red-600 hover:bg-red-50 gap-2"
                  onClick={() => {
                    signOut();
                    router.push("/");
                  }}
                >
                  <LogOut size={16} />
                  Выйти
                </Button>
              </div>
            </div>
          </aside>

          {/* User Activity Dashboard */}
          <main className="user-activity-feed flex-1">
            <nav className="activity-tabs-container flex gap-4 p-1 bg-gray-100 w-fit rounded-2xl mb-8" aria-label="Разделы профиля">
              <button className="active-tab-button px-6 py-2 bg-white rounded-xl shadow-sm font-medium text-sm">
                Мои объявления
              </button>
              <button className="inactive-tab-button px-6 py-2 text-apple-text-secondary font-medium text-sm hover:text-apple-text transition-colors">
                Избранное
              </button>
            </nav>

            <div className="empty-state-container grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="empty-feed-placeholder premium-content-card p-6 flex flex-col items-center justify-center text-center py-20 bg-white/50 border-2 border-dashed border-gray-200 shadow-none">
                <div className="package-icon-circle h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  <Package className="empty-box-icon text-gray-300" />
                </div>
                <h3 className="empty-state-heading text-lg font-semibold">У вас пока нет объявлений</h3>
                <p className="empty-state-subtext text-apple-text-secondary text-sm mt-2 max-w-xs">
                  Продайте что-нибудь ненужное прямо сейчас и заработайте на этом.
                </p>
                <Button className="create-first-ad-button mt-6">Разместить объявление</Button>
              </div>
            </div>
          </main>
        </div>
      </Container>

      {/* Profile Modification Modal */}
      {isEditProfileModalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            className="edit-profile-modal-surface bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-section flex justify-between items-center mb-6">
              <h2 className="modal-title text-2xl font-bold tracking-tight">Редактировать профиль</h2>
              <button
                onClick={() => setIsEditProfileModalOpen(false)}
                className="modal-close-button p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Закрыть модальное окно"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-form-content space-y-6">
              <div className="avatar-upload-selection flex flex-col items-center gap-4">
                <div className="current-avatar-preview-container relative group">
                  <div className="avatar-image-frame h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    <User size={48} className="avatar-icon text-gray-400" />
                  </div>
                  <button className="avatar-upload-overlay absolute inset-0 bg-black/20 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={24} />
                  </button>
                </div>
                <button className="change-photo-link text-sm font-medium text-apple-blue hover:underline">
                  Изменить фото
                </button>
              </div>

              <div className="form-input-group space-y-4">
                <div className="name-input-field-wrapper">
                  <label className="input-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                    Имя
                  </label>
                  <Input
                    value={profileFormName}
                    onChange={(e) => setProfileFormName(e.target.value)}
                    placeholder="Ваше имя"
                    className="name-input rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20"
                  />
                </div>
                <div className="bio-input-field-wrapper">
                  <label className="input-label block text-xs font-semibold text-apple-text-secondary uppercase tracking-wider mb-2 ml-1">
                    О себе
                  </label>
                  <textarea
                    value={profileFormBio}
                    onChange={(e) => setProfileFormBio(e.target.value)}
                    placeholder="Расскажите немного о себе"
                    className="bio-textarea w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-apple-blue/20 text-sm min-h-[100px] resize-none"
                  />
                </div>
              </div>

              <div className="modal-action-buttons flex gap-3 pt-4">
                <Button
                  variant="secondary"
                  className="cancel-editing-button flex-1 rounded-2xl h-12"
                  onClick={() => setIsEditProfileModalOpen(false)}
                >
                  Отмена
                </Button>
                <Button
                  className="save-profile-changes-button flex-1 rounded-2xl h-12"
                  onClick={handleSaveProfileUpdates}
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
