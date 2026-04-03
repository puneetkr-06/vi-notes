import React from "react";
import NoteForm from "./NoteForm";
import type { Note } from "../types/Note";

interface Props {
  editingNote: Note | null;
  onClose: () => void;
  onUpdate: (title: string, content: string, tag: string) => void;
}

const EditModal: React.FC<Props> = ({
  editingNote,
  onClose,
  onUpdate,
}) => {
  if (!editingNote) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Note</h2>

        <NoteForm
          editingNote={editingNote}
          onAdd={onUpdate}
        />

        <button className="btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;