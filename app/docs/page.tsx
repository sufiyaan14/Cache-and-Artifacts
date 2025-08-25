export default function Docs() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <h1>Project Docs</h1>
      <p>
        This starter demonstrates:
      </p>
      <ul>
        <li>Next.js 14 App Router</li>
        <li>Tailwind CSS</li>
        <li>API Route at <code>/api/health</code></li>
        <li>Server Actions CRUD with file-based persistence</li>
      </ul>
      <h2>Deploy notes</h2>
      <p>
        File-based persistence is for local development only. For production or Vercel, swap it with a database (e.g., SQLite/Prisma, Postgres).
      </p>
    </article>
  );
}
