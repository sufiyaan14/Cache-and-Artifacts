"use server";

import { revalidatePath } from "next/cache";
import { addTask, toggleTask, deleteTask } from "@/lib/db";

export async function createTaskAction(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  if (!title) return { error: "Title is required" };
  await addTask(title);
  revalidatePath("/tasks");
  return { ok: true };
}

export async function toggleTaskAction(id: number) {
  await toggleTask(id);
  revalidatePath("/tasks");
}

export async function deleteTaskAction(id: number) {
  await deleteTask(id);
  revalidatePath("/tasks");
}
