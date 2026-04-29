export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <section className="mx-auto max-w-md space-y-4 rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold">Login</h2>
        <input className="w-full rounded-xl border p-3" placeholder="Email or phone" />
        <input className="w-full rounded-xl border p-3" placeholder="Enter PIN" />
        <button className="w-full rounded-2xl bg-primary p-4 text-white">Login</button>
      </section>
    </main>
  );
}
