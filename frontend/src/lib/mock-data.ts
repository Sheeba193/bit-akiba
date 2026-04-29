export type MockTransaction = {
  id: string;
  amount: number;
  saved: number;
  status: "completed" | "pending";
  date: string;
  source: string;
};

export const mockWallet = {
  mainBalance: 12540,
  savingsBalance: 3210,
  todaysEarnings: 1980,
  autosavePercent: 10,
  savingsLockStatus: "Locked until weekly cycle",
  walletAddress: ""
};

export const mockTransactions: MockTransaction[] = [
  {
    id: "tx_1001",
    amount: 1000,
    saved: 100,
    status: "completed",
    date: "2026-04-29 16:20",
    source: "Market customer"
  },
  {
    id: "tx_1002",
    amount: 2500,
    saved: 250,
    status: "completed",
    date: "2026-04-29 11:10",
    source: "Delivery payment"
  },
  {
    id: "tx_1003",
    amount: 420,
    saved: 42,
    status: "pending",
    date: "2026-04-30 00:41",
    source: "Late settlement"
  }
];

export function formatKes(amount: number) {
  return `KES ${amount.toLocaleString()}`;
}
