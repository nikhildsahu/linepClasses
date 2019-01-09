import React, { Component } from "react";
import "./JJ.css";
import { Grid, Typography } from "@material-ui/core";
import Typed from "react-typed";
import logo from "../Icons/logo.svg";

class Landing extends Component {
  state = {};

  fu = () => {};

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <div style={{ left: "50%", marginTop: 300 }}>
          <Grid container justify="center">
            <Grid item xs={1} md={1}>
              <img style={{ marginTop: -40 }} src={logo} />
            </Grid>
            <Grid xs={2} md={2}>
              {" "}
              <Typed
                strings={["LineUp"]}
                typeSpeed={60}
                loop
                style={{
                  fontSize: "40px",
                  height: "20px"
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
