import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "BitAkiba",
  description: "Savings-first fintech app"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
