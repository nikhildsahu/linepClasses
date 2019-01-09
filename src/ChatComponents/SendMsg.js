import React, { Component } from "react";
import fire from "../Fire";
import "./Chat.css";
class SendMsg extends Component {
  state = {
    msg: null,
    uid: null,
    timestamp: null
  };

  onChange = e => {
    this.setState({ msg: e.target.value });
    this.setState({ uid: this.props.uid });
    var date = new Date();
    var timestamp = date.getTime();
    this.setState({ timestamp: timestamp });
  };

  onClick = () => {
    fire
      .database()
      .ref()
      .child("Msg")
      .push(this.state);
  };

  render() {
    return <div className="SendMsg">{}</div>;
  }
}

export default SendMsg;
