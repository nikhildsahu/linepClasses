import React, { Component } from "react";
import ChatShow from "../ChatComponents/ChatShow";
import "../A/Style.css";
import Carded from "./Carded";
import "../ChatComponents/Chat.css";
import CardSendPic from "../ChatComponents/CardSendPic";
import NavBar from "./NavBar";
import "../A/Gh.css";
import Drawer from "./Drawer";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <NavBar />

        <aside className="left-sidebar" data-sidebarbg="skin5">
          {/* Sidebar scroll*/}
          <div
            className="scroll-sidebar ps-container ps-theme-default ps-active-y"
            data-ps-id="f6476913-8b53-1eac-a6a0-b14a031df33a"
          >
            <Drawer />
          </div>
        </aside>
        <div className="page-wrapper" style={{ display: "block" }}>
          <div className="container-fluid">
            <ChatShow />
            <div className="Rel">
              <div className="Reliy">
                <CardSendPic uid="aa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
