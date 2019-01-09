import React, { Component } from "react";
import fire from "../Fire";
import Card from "../ChatComponents/Card";
import moment from "moment";
import { connect } from "react-redux";
import List from "@material-ui/core/List";

class Inbox extends Component {
  state = {
    mess: [],
    revmess: []
  };

  componentWillMount() {
    let a = [];

    if (this.props.type === "closed") {
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Inbox")
        .child(this.props.username)
        .on("child_added", df => {
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Msg")
            .child(df.val())
            .on("value", da => {
              a.push({
                msg: da.val().msg,
                uid: da.val().uid,
                username: da.val().username,
                name: da.val().name,
                timestamp: da.val().timestamp,
                pic: da.val().pic
              });
              this.setState({ mess: a });
            });

          this.setState({
            mess: this.state.mess,
            revmess: this.state.mess.reverse
          });
        });
      this.forceUpdate();
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Inbox")
        .child(this.props.username)
        .on("child_added", df => {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Msg")
            .child(df.val())
            .on("value", da => {
              a.push({
                msg: da.val().msg,
                uid: da.val().uid,
                username: da.val().username,
                name: da.val().name,
                timestamp: da.val().timestamp,
                pic: da.val().pic
              });
              this.setState({ mess: a });
            });

          this.setState({
            mess: this.state.mess,
            revmess: this.state.mess.reverse
          });
        });
      this.forceUpdate();
    }
  }

  jk = () => {
    if (this.props.type === "closed") {
      let a = [];
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Inbox")
        .child(this.props.username)
        .on("child_added", df => {
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Msg")
            .child(df.val())
            .on("value", da => {
              a.push({
                msg: da.val().msg,
                uid: da.val().uid,
                username: da.val().username,
                name: da.val().name,
                timestamp: da.val().timestamp,
                pic: da.val().pic
              });
              this.setState({ mess: a });
            });

          this.setState({
            mess: this.state.mess,
            revmess: this.state.mess.reverse
          });
        });
    } else {
      let a = [];
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Inbox")
        .child(this.props.username)
        .on("child_added", df => {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Msg")
            .child(df.val())
            .on("value", da => {
              a.push({
                msg: da.val().msg,
                uid: da.val().uid,
                username: da.val().username,
                name: da.val().name,
                timestamp: da.val().timestamp,
                pic: da.val().pic
              });
              this.setState({ mess: a });
            });

          this.setState({
            mess: this.state.mess,
            revmess: this.state.mess.reverse
          });
        });
    }
  };
  render() {
    return (
      <div className="card">
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
              Inbox
            </a>
          </li>
        </ul>
        {/* Tabs */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade active show"
            id="current-month"
            role="tabpanel"
            aria-labelledby="pills-timeline-tab"
          >
            <div className="card-body">
              <div className="profiletimeline m-t-0">
                <div>
                  <List>
                    {this.state.mess
                      .slice(0)
                      .reverse()
                      .map(mess => {
                        var a = moment(mess.timestamp).fromNow();

                        return (
                          <div>
                            <Card
                              uid={mess.uid}
                              username={mess.username}
                              name={mess.name}
                              msg={mess.msg}
                              pic={mess.pic}
                              timestamp={a}
                            />
                          </div>
                        );
                      })}
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
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
)(Inbox);
