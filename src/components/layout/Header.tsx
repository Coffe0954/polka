"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, Plus, User, Heart, X, LogIn } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { POPULAR_CITIES } from "@/mocks/cities";
import { useAuthentication } from "@/lib/auth-context";

export function Header() {
  const { isAuthenticated } = useAuthentication();
  const [isCityDropdownVisible, setIsCityDropdownVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Москва");
  const [locationSearchQuery, setLocationSearchQuery] = useState("");
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const filteredCityList = POPULAR_CITIES.filter(city =>
    city.toLowerCase().includes(locationSearchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="navigation-blur-header">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="app-branding-logo flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-apple-text">
            Полка
          </span>
        </Link>

        <div className="search-and-location-actions hidden flex-1 items-center gap-4 md:flex lg:ml-8 lg:mr-8">
          <div className="global-search-bar relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-apple-text-secondary" />
            <Input
              placeholder="Поиск объявлений"
              className="search-input-field pl-11 bg-gray-100/50 border-none h-10 rounded-full"
            />
          </div>

          <div className="city-selector-container relative" ref={cityDropdownRef}>
            <button
              onClick={() => setIsCityDropdownVisible(!isCityDropdownVisible)}
              className="location-trigger-button flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-apple-text-secondary hover:text-apple-text transition-colors whitespace-nowrap"
            >
              <MapPin className="h-4 w-4" />
              {selectedLocation}
            </button>

            {isCityDropdownVisible && (
              <div className="city-selection-dropdown absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60]">
                <div className="dropdown-search-header p-3 border-b border-gray-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Поиск города..."
                      value={locationSearchQuery}
                      onChange={(e) => setLocationSearchQuery(e.target.value)}
                      className="city-search-input w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div className="city-results-list max-h-60 overflow-y-auto p-1">
                  {filteredCityList.length > 0 ? (
                    filteredCityList.map(city => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedLocation(city);
                          setIsCityDropdownVisible(false);
                          setLocationSearchQuery("");
                        }}
                        className={`city-option-item w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedLocation === city
                            ? "bg-apple-blue/5 text-apple-blue font-semibold"
                            : "hover:bg-gray-50 text-apple-text-secondary hover:text-apple-text"
                        }`}
                      >
                        {city}
                      </button>
                    ))
                  ) : (
                    <div className="no-results-message p-4 text-center text-xs text-gray-400">Ничего не найдено</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <nav className="user-navigation-menu flex items-center gap-2 md:gap-4" aria-label="Панель пользователя">
          {isAuthenticated ? (
            <div className="authenticated-user-actions flex items-center gap-2 md:gap-4">
              <Link href="/favorites" className="favorites-link hidden md:block" aria-label="Избранное">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/create" className="create-ad-link hidden md:block">
                <Button size="md" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Подать объявление
                </Button>
              </Link>
              <Link href="/create" className="create-ad-link-mobile md:hidden">
                <Button size="icon" className="h-10 w-10">
                  <Plus className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/profile" className="user-profile-link" aria-label="Личный кабинет">
                <Button variant="secondary" size="icon" className="rounded-full bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="guest-user-actions flex items-center gap-2 md:gap-4">
              <Link href="/login" className="login-link">
                <Button variant="ghost" className="hidden md:flex gap-2">
                  <LogIn className="h-4 w-4" />
                  Войти
                </Button>
              </Link>
              <Link href="/login" className="login-link-mobile md:hidden">
                <Button variant="secondary" size="icon" className="rounded-full bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register" className="registration-link">
                <Button size="md">Регистрация</Button>
              </Link>
            </div>
          )}
        </nav>
      </Container>

      {/* Mobile-only secondary search bar */}
      <Container className="mobile-search-section pb-3 md:hidden">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-apple-text-secondary" />
          <Input
            placeholder="Поиск объявлений"
            className="mobile-search-input pl-11 bg-gray-100/50 border-none h-10 rounded-full"
          />
        </div>
      </Container>
    </header>
  );
}
