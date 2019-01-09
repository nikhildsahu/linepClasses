import React, { Component } from "react";
import "./Chat.css";
class ChatHead extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="Card">
          <div class="row">
            <div class="col s2">
              <div className="Avatar" />
            </div>
            <div class="col s8">
              <div className="User">{this.props.uid}</div>
            </div>
            <div class="col s2">
              <div className="Time">{this.props.timestamp}</div>
            </div>
            <div className="Text">{this.props.msg}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatHead;
