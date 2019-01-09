import React, { Component } from "react";
import Card from "../ChatComponents/ChatShow";
import "../A/Sb.css";
import ChatShow from "../ChatComponents/ChatShow";
class Uikit extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="tab-content" id="pills-tabContent" />
        <div
          class="tab-pane fade active show"
          id="current-month"
          role="tabpanel"
          aria-labelledby="pills-timeline-tab"
        >
          <div class="card-body">
            <div class="profiletimeline m-t-0" />
          </div>
        </div>
      </div>
    );
  }
}

export default Uikit;
