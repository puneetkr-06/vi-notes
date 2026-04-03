import React from "react";
import type { Note } from "../types/Note";
import NoteItem from "./NoteItem";

interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
  onPin: (id: string) => void;
}

const NotesList: React.FC<Props> = ({ notes, onDelete, onEdit,onPin }) => {
  return (
    <div className="notes-list">
      
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onPin={onPin}
          
        />
      ))}
    </div>
  );
};

export default NotesList;