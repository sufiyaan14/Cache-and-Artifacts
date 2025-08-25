import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Complete App",
  description: "Starter with Tailwind + Server Actions CRUD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-neutral-900/70">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold">Next Complete</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/tasks" className="rounded-xl border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">Tasks</Link>
              <Link href="/docs" className="rounded-xl border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">Docs</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <footer className="mx-auto max-w-6xl p-4 text-sm text-neutral-500">
          Built with Next.js 14 (App Router), Tailwind, and Server Actions.
        </footer>
      </body>
    </html>
  );
}
