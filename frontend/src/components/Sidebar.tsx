import React from "react";

type Props = {
  active: string;
  setActive: (val: string) => void;
};

const Sidebar: React.FC<Props> = ({ active, setActive }) => {
  const menu = ["Notes", "Stats", "Pinned"];

  return (
    <div className="sidebar">
      <h2 className="logo">🧭 Menu</h2>

      {menu.map((item) => (
        <div
          key={item}
          className={`sidebar-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;