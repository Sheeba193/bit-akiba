"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { mockTransactions, mockWallet, type MockTransaction } from "@/lib/mock-data";

type WalletState = typeof mockWallet;

type MockStoreState = {
  wallet: WalletState;
  transactions: MockTransaction[];
  simulateReceivePayment: (amount: number) => { invoiceId: string };
  setAutosavePercent: (percent: number) => void;
};

const STORAGE_KEY = "bitakiba-mock-store-v1";

const MockStoreContext = createContext<MockStoreState | null>(null);

export function MockStoreProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>(mockWallet);
  const [transactions, setTransactions] = useState<MockTransaction[]>(mockTransactions);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { wallet: WalletState; transactions: MockTransaction[] };
      if (parsed.wallet && parsed.transactions) {
        setWallet(parsed.wallet);
        setTransactions(parsed.transactions);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ wallet, transactions }));
  }, [wallet, transactions]);

  const simulateReceivePayment = (amount: number) => {
    const safeAmount = Number.isFinite(amount) && amount > 0 ? amount : 1200;
    const invoiceId = `inv_${Date.now()}`;
    const pendingTxId = `tx_${Date.now()}`;
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");

    setTransactions((prev) => [
      {
        id: pendingTxId,
        amount: safeAmount,
        saved: 0,
        status: "pending",
        date: now,
        source: "QR payment (awaiting settlement)"
      },
      ...prev
    ]);

    window.setTimeout(() => {
      const savedAmount = Number(((safeAmount * wallet.autosavePercent) / 100).toFixed(2));
      const mainAmount = Number((safeAmount - savedAmount).toFixed(2));

      setTransactions((prev) =>
        prev.map((tx) =>
          tx.id === pendingTxId
            ? {
                ...tx,
                status: "completed",
                saved: savedAmount,
                source: "QR payment confirmed"
              }
            : tx
        )
      );

      setWallet((prev) => ({
        ...prev,
        mainBalance: Number((prev.mainBalance + mainAmount).toFixed(2)),
        savingsBalance: Number((prev.savingsBalance + savedAmount).toFixed(2)),
        todaysEarnings: Number((prev.todaysEarnings + safeAmount).toFixed(2))
      }));
    }, 2000);

    return { invoiceId };
  };

  const setAutosavePercent = (percent: number) => {
    const safePercent = Math.max(5, Math.min(20, Math.round(percent)));
    setWallet((prev) => ({
      ...prev,
      autosavePercent: safePercent
    }));
  };

  const value = useMemo(
    () => ({
      wallet,
      transactions,
      simulateReceivePayment,
      setAutosavePercent
    }),
    [wallet, transactions]
  );

  return <MockStoreContext.Provider value={value}>{children}</MockStoreContext.Provider>;
}

export function useMockStore() {
  const ctx = useContext(MockStoreContext);
  if (!ctx) throw new Error("useMockStore must be used within MockStoreProvider");
  return ctx;
}
