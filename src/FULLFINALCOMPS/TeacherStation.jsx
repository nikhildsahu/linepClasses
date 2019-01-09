import React, { Component } from "react";
import { Grid, TextField, Button, Radio, RadioGroup } from "@material-ui/core";
import { Collapse, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import Link from "react-router-dom/Link";
class TeacherStation extends Component {
  constructor(props) {
    super(props);

    this.state = { col: false, my: [], user: true, mode: false };

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        var a = [];
        this.props.k(fire.auth().currentUser.uid);
        this.props.n(fire.auth().currentUser.displayName);
        this.props.p(fire.auth().currentUser.photoURL);

        window.localStorage.setItem("uid", fire.auth().currentUser.uid);
        window.localStorage.setItem(
          "displayName",
          fire.auth().currentUser.displayName
        );
        window.localStorage.setItem(
          "photourl",
          fire.auth().currentUser.photoURL
        );

        fire
          .database()
          .ref()
          .child("Teachers")
          .child(this.props.uid)
          .child("Classes")
          .on("child_added", dd => {
            a.push(dd.val());
            this.setState({ my: a });
          });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillMount() {}

  kk = e => {
    this.props.w(e);
    this.props.n(fire.auth().currentUser.displayName);
    this.props.p(fire.auth().currentUser.photoURL);
    this.props.k(fire.auth().currentUser.uid);

    window.localStorage.setItem("work", e);
    window.localStorage.setItem(
      "displayName",
      fire.auth().currentUser.displayName
    );
    window.localStorage.setItem("photoURL", fire.auth().currentUser.photoURL);
    window.localStorage.setItem("uid", fire.auth().currentUser.uid);
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
    if (this.state.mode === true) {
      if (this.state.news != null) {
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
      } else {
        window.alert("Please Enter Name !");
      }
    } else {
      if (this.state.news != null && this.state.pass != null) {
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

        fire
          .database()
          .ref()
          .child("Open")
          .child(this.state.news)

          .set(this.state.pass);

        fire
          .database()
          .ref()
          .child("Teachers")
          .child("Classes")
          .child(this.state.news)

          .set(this.state.news);











          
      } else {
        window.alert("Please Enter Name and PassWord!");
      }
    }
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        {!this.state.user ? <Redirect to="logint" /> : null}
        <br />
        <br />
        <br />
        <Grid justify="center" container>
          <br />
          <br />
          <br />

          <Grid
            style={{ textAlign: "center" }}
            className="shadow-lg"
            item
            md={6}
          >
            <Grid justify="center" container>
              <Grid style={{ textAlign: "center" }} item md={7}>
                <br />
                <Button
                  variant="outlined"
                  style={{ fontSize: "15px" }}
                  color="secondary"
                  onClick={this.toggle.bind(this)}
                >
                  Create New ClassRoom
                </Button>
                <br />
                <Collapse isOpen={this.state.col}>
                  {" "}
                  <br />
                  <Grid container>
                    <Grid md={12}>
                      <TextField
                        style={{ width: "100%" }}
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onChange.bind(this)}
                      />
                      <br />

                      <br />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={4}>
                      <Radio
                        checked={this.state.mode}
                        value={this.state.mode}
                        onClick={() => {
                          this.setState({ mode: !this.state.mode });
                        }}
                      />
                    </Grid>

                    <Grid item md={8}>
                      <h4>
                        <b> Close Group</b> : You have to manually add Students
                      </h4>
                    </Grid>
                    <Grid item md={4}>
                      <Radio
                        checked={!this.state.mode}
                        value={!this.state.mode}
                        onClick={() => {
                          this.setState({ mode: !this.state.mode });
                        }}
                      />
                    </Grid>

                    <Grid item md={8}>
                      <h4>
                        <b> Open Group</b>: Students can add themselves Using
                        Password
                      </h4>
                    </Grid>

                    {!this.state.mode ? (
                      <Grid justify="center" container>
                        <Grid item md={12}>
                          <TextField
                            style={{ width: "100%" }}
                            id="outlined-name"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            onChange={e => {
                              this.setState({ pass: e.target.value });
                            }}
                          />
                          <br />
                          <br />
                        </Grid>
                      </Grid>
                    ) : null}
                    <Grid container>
                      <br />
                      <br />

                      <Button
                        variant="outlined"
                        style={{ fontSize: "15px", marginTop: "21" }}
                        color="secondary"
                        onClick={this.creat.bind(this)}
                      >
                        Create
                      </Button>
                      <hr />
                    </Grid>
                  </Grid>
                </Collapse>

                <br />
              </Grid>
            </Grid>
            <hr />
            <Grid style={{ textAlign: "center" }} justify="center" container>
              <Grid
                style={{
                  textAlign: "center"
                }}
                item
                md={8}
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
                            to="/dashboard_teacher"
                          >
                            {" "}
                            {my}{" "}
                          </Link>
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
)(TeacherStation);
