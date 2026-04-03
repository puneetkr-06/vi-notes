import type { Note } from "../types/Note";

export const getNotesStats = (notes: Note[]) => {
  const total = notes.length;

  
  const pinnedCount = notes.filter((n) => n.pinned).length;

  
  const now = Date.now();
  const recentCount = notes.filter((note) => {
    const diffDays =
      (now - note.createdAt) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  }).length;

 
  const tagCount: Record<string, number> = {};

  notes.forEach((note) => {
    const tag = note.tag || "Others";
    tagCount[tag] = (tagCount[tag] || 0) + 1;
  });

  return {
    total,
    pinnedCount,
    recentCount,
    tagCount,
  };
};