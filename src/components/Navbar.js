import React from "react";

function Navbar({ page, setPage, favoritesCount }) {
  const linkStyle = (current) => ({
    color: page === current ? "#FFD700" : "white",
    margin: "0 15px",
    cursor: "pointer",
    fontWeight: page === current ? "bold" : "normal",
    textDecoration: "none",
    transition: "color 0.3s",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#111",
        padding: "10px 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 style={{ color: "#FFD700", margin: 0, fontSize: "24px" }}>
        🎥 Movie App
      </h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={linkStyle("home")} onClick={() => setPage("home")}>
          Home
        </span>
        <span style={linkStyle("favorites")} onClick={() => setPage("favorites")}>
          Favorites {favoritesCount > 0 && `(${favoritesCount})`}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
