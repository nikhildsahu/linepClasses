import React, { Component } from "react";

import Plx from "react-plx";
import scmob from "./Icons/scmob.png";

const phoneData = [
  {
    start: "self",
    startOffset: 100,
    duration: 200,
    easing: [0.25, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: 90,
        endValue: 0,
        property: "rotate"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "scale"
      }
    ]
  }
];

const contentData = [
  {
    start: ".Phone",
    startOffset: 100,
    duration: 200,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        unit: "%",
        property: "translateY"
      }
    ]
  }
];

export default class Coursel extends React.Component {
  render() {
    return <div />;
  }
}
