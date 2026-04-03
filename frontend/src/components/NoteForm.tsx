import React, { useState } from "react";
import type { Note } from "../types/Note";
import { useEffect } from "react";

interface Props {
    onAdd: (title: string, content: string, tag: string ) => void;
    editingNote?: Note | null;

}


const NoteForm: React.FC<Props> = ({ onAdd, editingNote }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setContent(editingNote.content);
            setTag(editingNote.tag || "");
        }
    }, [editingNote]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content) return;

        onAdd(title, content,tag);

        setTitle("");
        setContent("");
        setTag("");
    };


    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tag (e.g. Work, Personal)"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                {editingNote ? "Update Note" : "Add Note"}
            </button>
        </form>
    );
};

export default NoteForm;