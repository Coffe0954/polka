"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Interface representing user profile information.
 */
export interface UserProfile {
  fullName: string;
  email: string;
  isAccountVerified: boolean;
  avatarUrl?: string;
  bio?: string;
  registrationDate: string;
}

/**
 * Structure of the authentication context.
 */
interface AuthenticationContextType {
  isAuthenticated: boolean;
  currentUser: UserProfile | null;
  signIn: (profileData?: Partial<UserProfile>) => void;
  signOut: () => void;
  updateProfile: (updatedData: Partial<UserProfile>) => void;
}

const DEFAULT_GUEST_USER: UserProfile = {
  fullName: "Пользователь",
  email: "user@example.com",
  isAccountVerified: false,
  registrationDate: "", // Will be set on login
};

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

/**
 * Formats the current date into "Month Year" string in Russian.
 */
const getCurrentRussianDate = () => {
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

export function AuthenticationProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("app_is_authenticated") === "true";
    const savedProfile = localStorage.getItem("app_user_profile");

    setIsAuthenticated(authStatus);
    if (authStatus && savedProfile) {
      setCurrentUser(JSON.parse(savedProfile));
    } else if (authStatus) {
      setCurrentUser({ ...DEFAULT_GUEST_USER, registrationDate: getCurrentRussianDate() });
    }
  }, []);

  const signIn = (profileData?: Partial<UserProfile>) => {
    const newUserProfile: UserProfile = {
      ...DEFAULT_GUEST_USER,
      ...profileData,
      registrationDate: profileData?.registrationDate || getCurrentRussianDate()
    };

    localStorage.setItem("app_is_authenticated", "true");
    localStorage.setItem("app_user_profile", JSON.stringify(newUserProfile));

    setIsAuthenticated(true);
    setCurrentUser(newUserProfile);
  };

  const signOut = () => {
    localStorage.removeItem("app_is_authenticated");
    localStorage.removeItem("app_user_profile");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const updateProfile = (updatedData: Partial<UserProfile>) => {
    if (currentUser) {
      const updatedProfile = { ...currentUser, ...updatedData };
      setCurrentUser(updatedProfile);
      localStorage.setItem("app_user_profile", JSON.stringify(updatedProfile));
    }
  };

  return (
    <AuthenticationContext.Provider value={{
      isAuthenticated,
      currentUser,
      signIn,
      signOut,
      updateProfile
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

/**
 * Hook to access authentication and user profile data.
 */
export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error("useAuthentication must be used within an AuthenticationProvider");
  }
  return context;
}
