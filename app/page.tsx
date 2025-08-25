import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Page() {
  return (
    <div className="grid gap-8">
      <section className="rounded-2xl border p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <Rocket />
          <h1 className="text-2xl font-bold">Next.js Complete Starter</h1>
        </div>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          You have a working Next.js app with Tailwind CSS, a sample API route, and a Tasks CRUD using Server Actions with a JSON file.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/tasks" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Open Tasks</Link>
          <Link href="/api/health" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">API Health</Link>
          <Link href="/docs" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Docs</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["App Router", "Modern file-system routing inside /app"],
          ["Server Actions", "Mutations without client fetch boilerplate"],
          ["Tailwind CSS", "Utility-first styling, ready to use"]
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
