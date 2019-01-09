import React, { Component } from "react";
import fire from "../Fire";
import Card from "./Card";
import "../A/Style.css";
import "./Chat.css";
import Grid from "@material-ui/core/Grid";
import FF from "../assets/MyImages/beats.png";
import moment from "moment";
import CardSendPic from "./CardSendPic";
import { timingSafeEqual } from "crypto";
import LottieControl from "../FULLFINALCOMPS/LottieControl";
var f = [];
class ChatShow2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mess: [],
      revmess: [],
      def: 10,
      all: false
    };

    this.load = this.load.bind(this);
    this.kak();
  }

  load = () => {};
  componentDidMount() {
    this.kak();
  }

  kak = () => {
    fire
      .database()
      .ref()
      .child("Msg")
      .on("value", da => {
        this.setState({ num: da.numChildren() });
      });

    let a = [];
    fire
      .database()
      .ref()
      .child("Msg")
      .on("child_added", da => {
        a.push({
          msg: da.child("msg").node_.value_,
          uid: da.child("uid").node_.value_,

          username: da.child("username").node_.value_,
          name: da.child("name").node_.value_,
          timestamp: da.child("timestamp").node_.value_,
          pic: da.child("pic").node_.value_,
          propic: da.child("propic").node_.value_,
          key: da.key,
          nonce: da.child("nonce").node_.value_
        });
        this.setState({
          mess: a,
          revmess: this.state.mess.reverse()
        });

        this.forceUpdate();
      });
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }} className="card">
        {this.state.num === this.state.revmess.length ? (
          <div>
            <ul
              className="nav nav-pills custom-pills"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  id="pills-timeline-tab"
                  data-toggle="pill"
                  href="#current-month"
                  role="tab"
                  aria-controls="pills-timeline"
                  aria-selected="true"
                >
                  Timeline
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="current-month"
                role="tabpanel"
                aria-labelledby="pills-timeline-tab"
              >
                <div className="card-body">
                  <div className="profiletimeline m-t-0">
                    <ul>
                      {this.state.revmess.map(revmess => {
                        var a = moment(revmess.timestamp).fromNow();

                        return (
                          <li key={revmess.key}>
                            <div>
                              <Card
                                uid={revmess.uid}
                                username={revmess.username}
                                name={revmess.name}
                                msg={revmess.msg}
                                pic={revmess.pic}
                                timestamp={a}
                                propic={revmess.propic}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <LottieControl />
          </div>
        )}
      </div>
    );
  }
}

export default ChatShow2;
