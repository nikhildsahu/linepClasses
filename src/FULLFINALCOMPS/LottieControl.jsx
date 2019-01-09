import React from "react";
import Lottie from "react-lottie";
import animationData from "../data.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <div>
        <Lottie
          style={{
            position: "absolute",
            width: "100%",
            hieght: "100%"
          }}
          options={defaultOptions}
        />
      </div>
    );
  }
}
