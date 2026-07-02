"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, Plus, User, Heart } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function Header() {
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
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-apple-text-secondary hover:text-apple-text transition-colors whitespace-nowrap">
            <MapPin className="h-4 w-4" />
            Москва
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/favorites" className="md:hidden">
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
