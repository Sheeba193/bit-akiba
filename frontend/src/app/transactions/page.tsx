import BottomNav from "@/components/navigation/BottomNav";
import { formatKes, mockTransactions } from "@/lib/mock-data";

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <div className="space-y-3">
          {mockTransactions.map((tx) => (
            <article key={tx.id} className="rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold">{formatKes(tx.amount)}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    tx.status === "completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
              <p className="text-sm text-blue-700">Saved: {formatKes(tx.saved)}</p>
              <p className="text-xs text-slate-500">{tx.source}</p>
              <p className="text-xs text-slate-500">
                {tx.status} • {tx.date}
              </p>
            </article>
          ))}
        </div>
      </section>
      <BottomNav />
    </main>
  );
}
