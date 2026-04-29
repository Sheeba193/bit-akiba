"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/receive", label: "Receive" },
  { href: "/savings", label: "Savings" },
  { href: "/transactions", label: "Tx" },
  { href: "/settings/language", label: "Lang" }
];

export default function BottomNav() {
  const pathname = usePathname();

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
