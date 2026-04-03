import React from "react";
import type { Note } from "../types/Note";
import { getNotesStats } from "../utils/statsHelpers";

type Props = {
  notes: Note[];
};

const NotesStats: React.FC<Props> = ({ notes }) => {
  const { total, pinnedCount, recentCount, tagCount } =
    getNotesStats(notes);

  return (
    <div className="stats-container">
      <h2>📊 Notes Dashboard</h2>

      {/* Top Cards */}
      <div className="stats-grid">
        <div className="card">
          <h3>Total Notes</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Pinned</h3>
          <p>{pinnedCount}</p>
        </div>

        <div className="card">
          <h3>Recent (7 days)</h3>
          <p>{recentCount}</p>
        </div>
      </div>

      {/* Tag Breakdown */}
      <div className="card">
        <h3>Notes per Tag</h3>

        {Object.keys(tagCount).length === 0 ? (
          <p>No tags yet</p>
        ) : (
          <ul className="tag-list">
            {Object.entries(tagCount).map(([tag, count]) => (
              <li key={tag}>
                <span>{tag}</span>
                <strong>{count}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotesStats;