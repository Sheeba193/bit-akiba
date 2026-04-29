import BottomNav from "@/components/navigation/BottomNav";
import { formatKes, mockWallet } from "@/lib/mock-data";

export default function SavingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">Savings Vault</h2>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-blue-700">Total Savings</p>
          <p className="text-3xl font-bold text-blue-800">{formatKes(mockWallet.savingsBalance)}</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Lock Status</p>
          <p className="font-semibold text-amber-600">{mockWallet.savingsLockStatus}</p>
        </div>
        <button className="w-full rounded-2xl bg-slate-300 p-4 text-lg font-semibold text-slate-700">
          Withdraw (Restricted)
        </button>
      </section>
      <BottomNav />
    </main>
  );
}
