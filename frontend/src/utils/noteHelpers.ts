import type { Note } from "../types/Note";

export const filterAndSortNotes = (
  notes: Note[],
  search: string
) => {
  return notes
    .filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      
      if (a.pinned === b.pinned) {
        return b.updatedAt - a.updatedAt;
      }
      return a.pinned ? -1 : 1;
    });
};