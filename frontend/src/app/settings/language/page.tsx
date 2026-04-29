"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/navigation/BottomNav";

const options = [
  { code: "en", label: "English" },
  { code: "sw", label: "Swahili" },
  { code: "fr", label: "French" },
  { code: "zu", label: "Zulu" }
];

export default function LanguageSettingsPage() {
  const [current, setCurrent] = useState("en");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bitakiba-language");
    if (stored) setCurrent(stored);
  }, []);

  const onSelect = (value: string) => {
    setCurrent(value);
    localStorage.setItem("bitakiba-language", value);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">Language Settings</h2>
        {options.map((item) => (
          <button
            key={item.code}
            className={`w-full rounded-xl border p-4 text-left ${
              current === item.code ? "border-primary bg-blue-50" : "border-slate-200 bg-white"
            }`}
            onClick={() => onSelect(item.code)}
          >
            {item.label}
          </button>
        ))}
        {saved ? <p className="text-sm text-emerald-700">Language saved locally.</p> : null}
      </section>
      <BottomNav />
    </main>
  );
}
