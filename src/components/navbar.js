import React, { useState } from "react";
// import "../header.css";
function Navbar() {
  return (
    <div className="navbar">
      <header>
        <h1>Sticky Header Pow!</h1>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
