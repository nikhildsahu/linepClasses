import React, { Component } from "react";
import "../A/Gh.css";
import Grid from "@material-ui/core/Grid";
class Drawer extends Component {
  state = {};
  render() {
    return (
      <nav className="sidebar-nav" data-color="purple">
        {/*
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    */}

    
        <div className="logo">
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="./dashboard.html">
                <Grid container>
                  <Grid item xs={2}>
                    <i
                      style={{ color: "black", width: 30, height: 30 }}
                      className="material-icons"
                    >
                      dashboard
                    </i>
                  </Grid>
                  <Grid item xs={10}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: 40,
                        width: 200,
                        height: 30,
                        color: "black"
                      }}
                    >
                      Dashboard
                    </p>
                  </Grid>
                </Grid>
              </a>
            </li>
            <li>
              <a href="./dashboard.html">
                <Grid container>
                  <Grid item xs={2}>
                    <i
                      style={{ color: "black", width: 30, height: 30 }}
                      className="material-icons"
                    >
                      dashboard
                    </i>
                  </Grid>
                  <Grid item xs={10}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: 40,
                        width: 200,
                        height: 30,
                        color: "black"
                      }}
                    >
                      Dashboard
                    </p>
                  </Grid>
                </Grid>
              </a>
            </li>{" "}
            <li>
              <a href="./dashboard.html">
                <Grid container>
                  <Grid item xs={2}>
                    <i
                      style={{ color: "black", width: 30, height: 30 }}
                      className="material-icons"
                    >
                      dashboard
                    </i>
                  </Grid>
                  <Grid item xs={10}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: 40,
                        width: 200,
                        height: 30,
                        color: "black"
                      }}
                    >
                      Dashboard
                    </p>
                  </Grid>
                </Grid>
              </a>
            </li>{" "}
            <li>
              <a href="./dashboard.html">
                <Grid container>
                  <Grid item xs={2}>
                    <i
                      style={{ color: "black", width: 30, height: 30 }}
                      className="material-icons"
                    >
                      dashboard
                    </i>
                  </Grid>
                  <Grid item xs={10}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: 40,
                        width: 200,
                        height: 30,
                        color: "black"
                      }}
                    >
                      Dashboard
                    </p>
                  </Grid>
                </Grid>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: "url(../assets/img/sidebar-1.jpg)"
          }}
        />
      </nav>
    );
  }
}

export default Drawer;
