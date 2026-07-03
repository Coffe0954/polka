"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, Plus, User, Heart, X, LogIn } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { POPULAR_CITIES } from "@/mocks/cities";
import { useAuth } from "@/lib/auth-context";

export function Header() {
  const { isLoggedIn } = useAuth();
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Москва");
  const [citySearch, setCitySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCities = POPULAR_CITIES.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCityModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 glass">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-apple-text">
            Полка
          </span>
        </Link>

        <div className="hidden flex-1 items-center gap-4 md:flex lg:ml-8 lg:mr-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-apple-text-secondary" />
            <Input
              placeholder="Поиск объявлений"
              className="pl-11 bg-gray-100/50 border-none h-10 rounded-full"
            />
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsCityModalOpen(!isCityModalOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-apple-text-secondary hover:text-apple-text transition-colors whitespace-nowrap"
            >
              <MapPin className="h-4 w-4" />
              {selectedCity}
            </button>

            {isCityModalOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200 z-[60]">
                <div className="p-3 border-b border-gray-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Поиск города..."
                      value={citySearch}
                      onChange={(e) => setCitySearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-apple-blue/20"
                    />
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto p-1">
                  {filteredCities.length > 0 ? (
                    filteredCities.map(city => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsCityModalOpen(false);
                          setCitySearch("");
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCity === city
                            ? "bg-apple-blue/5 text-apple-blue font-semibold"
                            : "hover:bg-gray-50 text-apple-text-secondary hover:text-apple-text"
                        }`}
                      >
                        {city}
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-400">Ничего не найдено</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/favorites" className="hidden md:block">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/create" className="hidden md:block">
                <Button size="md" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Подать объявление
                </Button>
              </Link>
              <Link href="/create" className="md:hidden">
                <Button size="icon" className="h-10 w-10">
                  <Plus className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="secondary" size="icon" className="rounded-full bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="hidden md:flex gap-2">
                  <LogIn className="h-4 w-4" />
                  Войти
                </Button>
              </Link>
              <Link href="/login" className="md:hidden">
                <Button variant="secondary" size="icon" className="rounded-full bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="md">Регистрация</Button>
              </Link>
            </>
          )}
        </div>
      </Container>

      {/* Mobile Search Bar */}
      <Container className="pb-3 md:hidden">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-apple-text-secondary" />
          <Input
            placeholder="Поиск объявлений"
            className="pl-11 bg-gray-100/50 border-none h-10 rounded-full"
          />
        </div>
      </Container>
    </header>
  );
}
