import React, { Component } from "react";
import fire from "../Fire";
import Card from "./Card";
import "../A/Style.css";
import "./Chat.css";
import Grid from "@material-ui/core/Grid";
import FF from "../assets/MyImages/beats.png";
import moment from "moment";
import Link from "react-router-dom/Link";
import CardSendPic from "./CardSendPic";
import { timingSafeEqual } from "crypto";
import TrackVisibility from "react-on-screen";
import { connect } from "react-redux";
var f = [];
var val = 3;
class ChatShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mess: [],
      revmess: [],
      choturevmess: [],
      def: 10,
      all: false,
      num: 10
    };

    this.bab();
    this.load = this.load.bind(this);

    window.addEventListener("scroll", event => {
      if (event.pageYOffset % 2000 === 0) {
        this.setState({ num: this.state.num + 10 });

        this.kak();
      }

      if (event.pageYOffset === "up")
        this.setState({ num: this.state.num - 1 });
    });
  }

  bab = () => {
    this.setState({ num: this.state.num + 10 });

    if (this.props.type === "closed") {
      let a = [];

      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Msg")
        .limitToLast(this.state.num)
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
            revmess: this.state.mess.reverse(),
            choturevmess: this.state.revmess.slice(0, 20)
          });

          this.forceUpdate();
        });
    } else {
      let a = [];

      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Msg")
        .limitToLast(this.state.num)
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
            revmess: this.state.mess.reverse(),
            choturevmess: this.state.revmess.slice(0, 20)
          });

          this.forceUpdate();
        });
    }
  };
  load = () => {};

  componentDidMount() {
    this.kak(1);
  }

  ll = () => {
    val = 50;
  };
  kak = num => {
    // console.log("as", num);
    // let a = [];
    // fire
    //   .database()
    //   .ref()
    //   .child("Msg")
    //   .limitToLast(3)
    //   .on("child_added", da => {
    //     a.push({
    //       msg: da.child("msg").node_.value_,
    //       uid: da.child("uid").node_.value_,
    //       username: da.child("username").node_.value_,
    //       name: da.child("name").node_.value_,
    //       timestamp: da.child("timestamp").node_.value_,
    //       pic: da.child("pic").node_.value_,
    //       propic: da.child("propic").node_.value_,
    //       key: da.key,
    //       nonce: da.child("nonce").node_.value_
    //     });
    //     this.setState({
    //       mess: a,
    //       revmess: this.state.mess.reverse(),
    //       choturevmess: this.state.revmess.slice(0, 20)
    //     });
    //     this.forceUpdate();
    //   });
  };
  render() {
    return (
      <div className="card">
        {this.state.all ? (
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
                  <div style={{ height: 400, overflowY: "scroll" }}>
                    <ul>
                      {this.state.choturevmess.map(choturevmess => {
                        var a = moment(choturevmess.timestamp).fromNow();

                        return (
                          <li key={choturevmess.nonce}>
                            <div>
                              <Card
                                uid={choturevmess.uid}
                                username={choturevmess.username}
                                name={choturevmess.name}
                                msg={choturevmess.msg}
                                pic={choturevmess.pic}
                                timestamp={a}
                                propic={choturevmess.propic}
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
            <div className="card-hover" style={{ textAlign: "center" }}>
              <a onClick={this.ll.bind(this)}>Load All Messages</a>
            </div>
          </div>
        ) : (
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
                            <div key={revmess.key}>
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
            <div className="card-hover" style={{ textAlign: "center" }}>
              <a onClick={this.bab.bind(this)}>Load More Messages</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    k: id => {
      dispatch(uid(id));
    },

    n: id => {
      dispatch(name(id));
    },

    u: id => {
      dispatch(username(id));
    },

    p: id => {
      dispatch(pic(id));
    },
    w: id => {
      dispatch(work(id));
    },
    t: id => {
      dispatch(type(id));
    }
  };
};

function uid(index) {
  return { type: "UID", payload: index };
}

function name(index) {
  return { type: "NAME", payload: index };
}

function username(index) {
  return { type: "USERNAME", payload: index };
}

function pic(index) {
  return { type: "PIC", payload: index };
}
function work(index) {
  return { type: "WORK", payload: index };
}
function type(index) {
  return { type: "TYPE", payload: index };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatShow);
