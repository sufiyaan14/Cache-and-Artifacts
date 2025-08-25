import { listTasks } from "@/lib/db";
import { createTaskAction, toggleTaskAction, deleteTaskAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await listTasks();

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">Tasks</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Simple CRUD using Server Actions.</p>
      </div>

      <form action={createTaskAction} className="flex flex-wrap gap-3 rounded-xl border p-4">
        <input
          name="title"
          placeholder="Task title..."
          className="min-w-[240px] flex-1 rounded-xl border px-3 py-2 outline-none focus:ring"
        />
        <button className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
          Add Task
        </button>
      </form>

      <ul className="grid gap-2">
        {tasks.length === 0 && <li className="text-neutral-500">No tasks yet.</li>}
        {tasks.map(t => (
          <li key={t.id} className="flex items-center justify-between gap-3 rounded-xl border p-3">
            <div className="flex items-center gap-3">
              <form action={async () => { 'use server'; await toggleTaskAction(t.id); }}>
                <button className="rounded-md border px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  {t.done ? "Undo" : "Done"}
                </button>
              </form>
              <span className={t.done ? "line-through text-neutral-500" : ""}>{t.title}</span>
            </div>
            <form action={async () => { 'use server'; await deleteTaskAction(t.id); }}>
              <button className="rounded-md border px-2 py-1 text-sm hover:bg-red-50 dark:hover:bg-red-900/20">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
