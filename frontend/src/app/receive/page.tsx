"use client";

import { useMemo, useState } from "react";
import BottomNav from "@/components/navigation/BottomNav";
import { formatKes, mockWallet } from "@/lib/mock-data";

type PaymentStatus = "idle" | "pending" | "paid";

export default function ReceivePage() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [invoiceId, setInvoiceId] = useState("");

  const handleGenerate = () => {
    const currentInvoiceId = `inv_${Date.now()}`;
    setInvoiceId(currentInvoiceId);
    setStatus("pending");
    window.setTimeout(() => {
      setStatus("paid");
    }, 2000);
  };
  const effectiveAmount = useMemo(() => Number(amount || 1200), [amount]);
  const savedPreview = useMemo(
    () => Number(((effectiveAmount * mockWallet.autosavePercent) / 100).toFixed(2)),
    [effectiveAmount]
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">Receive Payment</h2>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white p-3 text-lg"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Optional amount"
        />
        <button
          onClick={handleGenerate}
          className="w-full rounded-2xl bg-primary p-4 text-lg font-semibold text-white"
        >
          Generate QR
        </button>
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mx-auto h-44 w-44 rounded-lg bg-slate-200" />
          <p className="mt-3 text-sm text-slate-500">QR invoice appears here</p>
          {invoiceId ? <p className="mt-1 text-xs text-slate-400">Invoice: {invoiceId}</p> : null}
        </div>
        <div className="rounded-xl bg-white p-3 text-sm shadow-sm">
          Auto-save preview ({mockWallet.autosavePercent}%):{" "}
          <span className="font-semibold text-blue-700">{formatKes(savedPreview)}</span>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          Status:{" "}
          <span className="font-semibold">
            {status === "idle" ? "Waiting" : status === "pending" ? "Pending..." : "Paid"}
          </span>
        </div>
      </section>
      <BottomNav />
    </main>
  );
}
