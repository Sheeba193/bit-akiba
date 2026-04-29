"use client";

import Link from "next/link";
import BottomNav from "@/components/navigation/BottomNav";
import { formatKes } from "@/lib/mock-data";
import { useMockStore } from "@/lib/mock-store";

export default function HomePage() {
  const { wallet } = useMockStore();

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h1 className="text-2xl font-semibold text-primary">BitAkiba</h1>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Main Balance</p>
          <p className="text-3xl font-bold">{formatKes(wallet.mainBalance)}</p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-blue-700">Savings Balance</p>
          <p className="text-3xl font-bold text-blue-800">{formatKes(wallet.savingsBalance)}</p>
        </div>

        <Link
          href="/receive"
          className="block w-full rounded-2xl bg-primary p-4 text-center text-lg font-semibold text-white"
        >
          Receive Payment
        </Link>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Today&apos;s Earnings</p>
          <p className="text-xl font-semibold">{formatKes(wallet.todaysEarnings)}</p>
        </div>
      </section>
      <BottomNav />
    </main>
  );
}
