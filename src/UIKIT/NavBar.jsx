import React, { Component } from "react";
import FF from "../assets/MyImages/beats.png";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <header className="topbar" data-navbarbg="skin6">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={FF} width="30" height="30" alt="" />
          </a>
        </nav>
      </header>
    );
  }
}

export default NavBar;
