"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const navItems = [
    { href: "/", label: t("home") },
    { href: "/receive", label: t("receivePayment") },
    { href: "/savings", label: t("savings") },
    { href: "/transactions", label: t("transactions") },
    { href: "/settings/language", label: t("language") }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="mx-auto grid max-w-md grid-cols-5 text-xs">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-3 text-center font-medium ${active ? "text-primary" : "text-slate-500"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
