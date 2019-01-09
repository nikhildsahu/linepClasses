import React, { Component } from "react";

import fire from "../Fire";
class MasterMind extends Component {
  constructor(props) {
    super(props);
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
  }
  render() {
    return <div>{this.setState(this.props)}</div>;
  }
}

export default MasterMind;
