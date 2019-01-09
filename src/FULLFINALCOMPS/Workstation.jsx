import React, { Component } from "react";
import { Grid, TextField, Button, Radio } from "@material-ui/core";
import { Collapse, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import Link from "react-router-dom/Link";
class Workstation extends Component {
  constructor(props) {
    super(props);

    this.props.t(window.localStorage.getItem("type"));

    this.props.w(window.localStorage.getItem("work"));

    this.state = { my: [], col: false, closed: false, open: true, Open: [] };
    fire.auth().onAuthStateChanged(user => {
      console.log("USER", user);

      if (user) {
        this.props.k(user.uid);
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("name")
          .on("value", dd => {
            this.props.n(dd.val());
          });

        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("username")
          .on("value", dd => {
            this.props.u(dd.val());
          });
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("pic")
          .on("value", dd => {
            this.props.p(dd.val());
          });

        var a = [];
        var Open = [];

        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("WorkStation")
          .on("child_added", da => {
            a.push(da.val());
            this.setState({ my: a });
          });

        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("OpenGroup")
          .on("child_added", da => {
            Open.push(da.val());
            this.setState({ Open: Open });
          });

        this.setState({ Open: Open });

        this.setState({ my: a });
        console.log(this.state);
      } else {
      }
    });
  }

  componentWillMount() {}

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
    if (this.state.closed === true) {
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.state.news)
        .child("Members")
        .child(this.props.uid)
        .set(this.props.uid);

      fire
        .database()
        .ref()
        .child("Profiles")
        .child(this.props.uid)
        .child("WorkStation")
        .child(this.state.news)
        .set(this.state.news);
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.state.news)
        .child("Members")
        .child(this.props.uid)
        .set(this.props.uid);

      fire
        .database()
        .ref()
        .child("Profiles")
        .child(this.props.uid)
        .child("OpenGroup")
        .child(this.state.news)
        .set(this.state.news);
    }
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.props.work != null && this.props.type != null ? (
          <Redirect to="/dashboard" />
        ) : null}
        <Grid justify="center" container>
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
                  Create New Workstation
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
                    <br />
                    <Radio
                      onClick={this.toggle2.bind(this)}
                      checked={this.state.open}
                      value="a"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    <b>
                      <h4>
                        <b>Open Group </b> Anyone Can Join And Access This Group
                      </h4>
                    </b>
                  </Grid>
                  <Grid style={{ textAlign: "left" }} container>
                    <Radio
                      onClick={this.toggle2.bind(this)}
                      checked={this.state.closed}
                      value="a"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    <b>
                      <h4>
                        <b>Closed Group </b> Only Added Members Can Access Group
                        <br />
                        You Can Add Members Later From >Members
                      </h4>
                    </b>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      style={{ fontSize: "15px", marginTop: "21" }}
                      color="secondary"
                      onClick={this.creat.bind(this)}
                    >
                      OK{" "}
                    </Button>

                    <br />
                    <hr />
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
                  <b> My Workstation </b>{" "}
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
                          onClick={this.kk.bind(this, my, "closed")}
                          class="list-group-item card-hover"
                        >
                          {my}
                        </li>
                      );
                    })}
                  </ul>
                </h3>
              </Grid>{" "}
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
                  <b> Open Workstation </b>{" "}
                </h3>
                <h3 style={{ overflow: "auto", height: 200, width: "100%" }}>
                  {" "}
                  <ul
                    style={{ textAlign: "left", padding: "5%" }}
                    class="list-group"
                  >
                    {this.state.Open.map(Open => {
                      return (
                        <li
                          onClick={this.kk.bind(this, Open, "open")}
                          class="list-group-item card-hover"
                        >
                          {Open}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </h3>
              </Grid>{" "}
            </Grid>{" "}
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
)(Workstation);
