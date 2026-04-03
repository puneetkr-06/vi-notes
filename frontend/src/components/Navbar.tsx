import React from "react";

interface User {
  name: string;
  email?: string;
  avatar?: string;
}

interface Props {
  user: User;
}

const Navbar: React.FC<Props> = ({ user }) => {
  return (
    <div className="navbar">
      <h2>Notes App</h2>

      <div className="user-section">
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="avatar" />
        ) : (
          <div className="avatar-placeholder">
            {user.name[0].toUpperCase()}
          </div>
        )}

        <div className="user-info">
          <span className="user-name">{user.name}</span>
          {user.email && (
            <span className="user-email">{user.email}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;