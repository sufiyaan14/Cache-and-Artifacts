import { promises as fs } from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "tasks.json");

export type Task = {
  id: number;
  title: string;
  done: boolean;
};

type DB = {
  lastId: number;
  tasks: Task[];
};

async function readDB(): Promise<DB> {
  const raw = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(raw);
}

async function writeDB(db: DB) {
  await fs.writeFile(dataPath, JSON.stringify(db, null, 2), "utf-8");
}

export async function listTasks(): Promise<Task[]> {
  const db = await readDB();
  return db.tasks;
}

export async function addTask(title: string): Promise<Task> {
  const db = await readDB();
  const newTask: Task = { id: ++db.lastId, title, done: false };
  db.tasks.push(newTask);
  await writeDB(db);
  return newTask;
}

export async function toggleTask(id: number): Promise<Task | null> {
  const db = await readDB();
  const t = db.tasks.find(x => x.id === id);
  if (!t) return null;
  t.done = !t.done;
  await writeDB(db);
  return t;
}

export async function deleteTask(id: number): Promise<boolean> {
  const db = await readDB();
  const before = db.tasks.length;
  db.tasks = db.tasks.filter(t => t.id !== id);
  await writeDB(db);
  return db.tasks.length < before;
}
