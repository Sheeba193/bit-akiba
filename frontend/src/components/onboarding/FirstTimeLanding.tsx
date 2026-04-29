"use client";

import { useState } from "react";
import { useMockStore } from "@/lib/mock-store";

export default function FirstTimeLanding() {
  const { connectWalletAddress } = useMockStore();
  const [walletAddress, setWalletAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

  const onConnect = () => {
    const result = connectWalletAddress(walletAddress);
    setFeedback(result.message);
    setSuccess(result.ok);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center space-y-4 p-5">
        <img src="/bitakiba-logo.png" alt="BitAkiba logo" className="mx-auto w-56 max-w-full" />
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-[#003D9B]">Welcome to BitAkiba</h1>
          <p className="text-sm text-slate-600">
            Connect your crypto wallet to get started. You will be able to receive money and save
            automatically.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <label htmlFor="wallet-address" className="mb-2 block text-sm font-medium text-slate-700">
            Crypto wallet address
          </label>
          <input
            id="wallet-address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Paste wallet address"
            className="w-full rounded-xl border border-slate-300 p-3 text-sm"
          />
          <button
            onClick={onConnect}
            className="mt-3 w-full rounded-2xl bg-[#003D9B] p-4 text-lg font-semibold text-white"
          >
            Connect Crypto Wallet
          </button>
          {feedback ? (
            <p className={`mt-2 text-sm ${success ? "text-emerald-700" : "text-rose-600"}`}>{feedback}</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
