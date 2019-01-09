import React, { Component } from "react";
import { Grid, TextField, Button, Radio } from "@material-ui/core";
import { Collapse, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import Modal from "react-responsive-modal";

import Link from "react-router-dom/Link";
class StudentStation extends Component {
  constructor(props) {
    super(props);

    this.state = { col: false, my: [], lo: false, open: [] };

    fire.auth().onAuthStateChanged(user => {
      console.log("USER");

      if (user) {
        var a = [];

        if (!fire.auth().currentUser.email.includes("@rknec.edu")) {
          fire.auth().signOut();

          this.setState({ lo: false });
        } else {
          
          fire
            .database()
            .ref()
            .child("List")
            .child(fire.auth().currentUser.email.replace("@rknec.edu", ""))
            .on("child_added", kk => {
              console.log("AAAAAAAAAAAAAAAAA", kk.val());

              a.push(kk.val());

              this.setState({ my: a });
            });

          var z = [];
          fire
            .database()
            .ref()
            .child("Open")
            .on("child_added", ol => {
              z.push({ name: ol.key, pass: ol.val() });
              console.log(z);
              this.setState({ open: z });
            });
        }
      }
    });
  }

  componentWillMount() {}

  onOpenModal2 = () => {
    this.setState({ open2: true });
  };
  onOpenModal3 = y => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };
  kk = e => {
    window.localStorage.setItem(
      "displayName",
      fire.auth().currentUser.displayName
    );

    window.localStorage.setItem("photoUrl", fire.auth().currentUser.photoURL);

    this.props.w(e);
    window.localStorage.setItem("work", e);
  };
  onChange = e => {
    this.setState({ news: e.target.value });
  };

  toggle = () => {
    this.setState({ col: !this.state.col });
  };
  toggle2 = () => {
    this.setState({ closed: !this.state.closed, open: !this.state.open });
  };
  creat = () => {
    fire
      .database()
      .ref()
      .child("Teachers")
      .child(this.props.uid)
      .child("Classes")
      .child(this.state.news)
      .set(this.state.news);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.state.news)
      .child("Teachers")
      .child(this.props.uid)

      .set(this.props.uid);
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <Grid justify="center" container>
          <Grid
            style={{ textAlign: "center", marginTop: "50px" }}
            className="shadow-lg"
            item
            md={6}
            xs={12}
          >
            {this.state.lo ? <Redirect to="/logins" /> : null}
            <Grid style={{ textAlign: "center" }} justify="center" container>
              <Grid
                style={{
                  textAlign: "center"
                }}
                item
                md={8}
                xs={12}
              >
                <br />
                <h3>
                  {" "}
                  <b> My ClassRoom </b>{" "}
                </h3>
                <h3 style={{ overflow: "auto", height: 200, width: "100%" }}>
                  {" "}
                  <ul
                    style={{ textAlign: "left", padding: "5%" }}
                    class="list-group"
                  >
                    {this.state.my.map(my => {
                      return (
                        <li
                          onClick={this.kk.bind(this, my)}
                          class="list-group-item card-hover"
                        >
                          <Link
                            style={{ color: "black" }}
                            to="/dashboard_student"
                          >
                            {" "}
                            {my}{" "}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </h3>
              </Grid>
              <Grid
                style={{
                  textAlign: "center"
                }}
                item
                md={8}
                xs={12}
              >
                <br />
                <h3>
                  {" "}
                  <b>Open ClassRoom </b>{" "}
                </h3>
                <h3 style={{ overflow: "auto", height: 200, width: "100%" }}>
                  {" "}
                  <ul
                    style={{ textAlign: "left", padding: "5%" }}
                    class="list-group"
                  >
                    {this.state.open.map(open => {
                      return (
                        <li
                          onClick={this.kk.bind(this, open.name)}
                          class="list-group-item card-hover"
                          onClick={() => {
                            this.setState({
                              op: true,
                              Nowpass: open.pass,
                              Nowname: open.name
                            });
                          }}
                        >
                          {" "}
                          <a> {open.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </h3>
              </Grid>{" "}
            </Grid>
            <hr />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
        <Modal
          style={{ height: "600px" }}
          open={this.state.op}
          onClose={() => {
            this.setState({ op: false });
          }}
          center
        >
          <h3>
            {" "}
            <b> Enter Password </b>{" "}
          </h3>{" "}
          <br />
          <TextField
            style={{ width: "100%" }}
            id="outlined-name"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={e => {
              this.setState({ myP: e.target.value });
            }}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              if (
                this.state.myP === this.state.Nowpass &&
                this.state.myP !== null &&
                this.state.Nowpass !== null
              ) {
                fire
                  .database()
                  .ref()
                  .child("List")
                  .child(
                    fire.auth().currentUser.email.replace("@rknec.edu", "")
                  )
                  .child(this.state.Nowname)
                  .set(this.state.Nowname);

                fire
                  .database()
                  .ref()
                  .child("Noti")
                  .child(
                    fire.auth().currentUser.email.replace("@rknec.edu", "")
                  )
                  .child(this.state.Nowname.replace(" ", ""))
                  .set(this.state.Nowname.replace(" ", ""));


                fire
                  .database()
                  .ref()
                  .child("Classes")

                  .child(this.state.Nowname)
                  .child("Students")
                  .child(
                    fire.auth().currentUser.email.replace("@rknec.edu", "")
                  )
                  .set(fire.auth().currentUser.email.replace("@rknec.edu", ""));

                window.alert("Classroom Added To My Classroom");
              } else {
                window.alert("Password InCorrect !");
              }
            }}
            color="primary"
            variant="contained"
          >
            Enter{" "}
          </Button>
        </Modal>
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
    },

    r: id => {
      dispatch(roll(id));
    },
    b: id => {
      dispatch(batch(id));
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

function roll(index) {
  return { type: "ROLL", payload: index };
}

function batch(index) {
  return { type: "BATCH", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentStation);
