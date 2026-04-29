"use client";

import { useEffect } from "react";
import { MockStoreProvider } from "@/lib/mock-store";
import i18n from "@/lib/i18n";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("bitakiba-language");
    if (storedLanguage) {
      void i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return <MockStoreProvider>{children}</MockStoreProvider>;
}
