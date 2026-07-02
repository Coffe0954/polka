import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Полка — Маркетплейс в стиле Apple",
  description: "Покупайте и продавайте вещи на премиальном маркетплейсе Полка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
