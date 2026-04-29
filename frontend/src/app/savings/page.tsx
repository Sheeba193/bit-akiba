"use client";

import BottomNav from "@/components/navigation/BottomNav";
import { formatKes } from "@/lib/mock-data";
import { useMockStore } from "@/lib/mock-store";

export default function SavingsPage() {
  const { wallet, setAutosavePercent } = useMockStore();
  const percentOptions = [5, 10, 15, 20];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">Savings Vault</h2>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-blue-700">Total Savings</p>
          <p className="text-3xl font-bold text-blue-800">{formatKes(wallet.savingsBalance)}</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Lock Status</p>
          <p className="font-semibold text-amber-600">{wallet.savingsLockStatus}</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label htmlFor="autosave-percent" className="mb-2 block text-sm text-slate-500">
            Auto-save percentage
          </label>
          <select
            id="autosave-percent"
            value={wallet.autosavePercent}
            onChange={(e) => setAutosavePercent(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-base"
          >
            {percentOptions.map((percent) => (
              <option key={percent} value={percent}>
                {percent}%
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-slate-500">
            New incoming payments will save {wallet.autosavePercent}% automatically.
          </p>
        </div>
        <button className="w-full rounded-2xl bg-slate-300 p-4 text-lg font-semibold text-slate-700">
          Withdraw (Restricted)
        </button>
      </section>
      <BottomNav />
    </main>
  );
}
