import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <span className="Msrt bold t24">MOVIEW</span>
        </div>
        <div>
          <button>Search</button>
        </div>
      </header>
    );
  }
}

export default Header;
