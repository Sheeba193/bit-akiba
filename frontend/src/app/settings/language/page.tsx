"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/navigation/BottomNav";
import i18n from "@/lib/i18n";

const options = [
  { code: "en", label: "English" },
  { code: "sw", label: "Swahili" },
  { code: "fr", label: "French" },
  { code: "zu", label: "Zulu" }
];

export default function LanguageSettingsPage() {
  const [current, setCurrent] = useState("en");
  const [selected, setSelected] = useState("en");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bitakiba-language");
    if (stored) {
      setCurrent(stored);
      setSelected(stored);
      void i18n.changeLanguage(stored);
    }
  }, []);

  const onApplyLanguage = () => {
    setCurrent(selected);
    localStorage.setItem("bitakiba-language", selected);
    void i18n.changeLanguage(selected);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1200);
  };

  const activeLanguage = options.find((item) => item.code === current)?.label ?? "English";

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="mx-auto max-w-md space-y-4 p-4">
        <h2 className="text-xl font-semibold">change language</h2>
        <p className="text-sm text-slate-600">
          Active language: <span className="font-semibold">{activeLanguage}</span>
        </p>
        {options.map((item) => (
          <button
            key={item.code}
            className={`w-full rounded-xl border p-4 text-left ${
              selected === item.code ? "border-primary bg-blue-50" : "border-slate-200 bg-white"
            }`}
            onClick={() => setSelected(item.code)}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={onApplyLanguage}
          className="mt-2 w-full rounded-2xl border border-blue-700 bg-blue-600 p-4 text-center text-lg font-semibold text-white shadow-sm"
        >
          Apply Language
        </button>
        {saved ? <p className="text-sm text-emerald-700">Language saved locally.</p> : null}
      </section>
      <BottomNav />
    </main>
  );
}
