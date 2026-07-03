"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UserData {
  name: string;
  email: string;
  isVerified: boolean;
  avatar?: string;
  bio?: string;
  joinedDate: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserData | null;
  login: (userData?: Partial<UserData>) => void;
  logout: () => void;
  updateUser: (newData: Partial<UserData>) => void;
}

const DEFAULT_USER: UserData = {
  name: "Пользователь",
  email: "user@example.com",
  isVerified: false,
  joinedDate: "Июнь 2024",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    const storedUser = localStorage.getItem("userData");

    setIsLoggedIn(status);
    if (status && storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (status) {
      setUser(DEFAULT_USER);
    }
  }, []);

  const login = (userData?: Partial<UserData>) => {
    const newUser = { ...DEFAULT_USER, ...userData };
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(newUser));
    setIsLoggedIn(true);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUser(null);
  };

  const updateUser = (newData: Partial<UserData>) => {
    if (user) {
      const updatedUser = { ...user, ...newData };
      setUser(updatedUser);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
