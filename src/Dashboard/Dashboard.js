import React, { Component } from "react";
import Card from "../ChatComponents/ChatShow";
import "../A/Sb.css";
import ChatShow from "../ChatComponents/ChatShow";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <a class="navbar-brand" href="#pablo">
                <div class="ripple-container" />
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar" />
              <span class="navbar-toggler-icon icon-bar" />
              <span class="navbar-toggler-icon icon-bar" />
            </button>
            <div class="collapse navbar-collapse justify-content-end">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#pablo">
                    <div class="ripple-container" />
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="http://example.com"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">notifications</i>
                    <span class="notification">5</span>
                    <p class="d-lg-none d-md-block">Some Actions</p>
                    <div class="ripple-container" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Mike John responded to your email
                    </a>
                    <a class="dropdown-item" href="#">
                      You have 5 new tasks
                    </a>
                    <a class="dropdown-item" href="#">
                      You're now friend with Andrew
                    </a>
                    <a class="dropdown-item" href="#">
                      Another Notification
                    </a>
                    <a class="dropdown-item" href="#">
                      Another One
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#pablo"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">Account</p>
                    <div class="ripple-container" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                    <div class="dropdown-divider" />
                    <a class="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="sidebar" data-color="purple" data-background-color="white">
          <div class="logo">
            <a
              href="http://www.creative-tim.com"
              class="simple-text logo-normal"
            >
              Creative Tim
            </a>
          </div>
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="nav-item active  ">
                <a class="nav-link" href="./dashboard.html">
                  <i class="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./user.html">
                  <i class="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./tables.html">
                  <i class="material-icons">content_paste</i>
                  <p>Table List</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./typography.html">
                  <i class="material-icons">library_books</i>
                  <p>Typography</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./icons.html">
                  <i class="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./map.html">
                  <i class="material-icons">location_ons</i>
                  <p>Maps</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./notifications.html">
                  <i class="material-icons">notifications</i>
                  <p>Notifications</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./rtl.html">
                  <i class="material-icons">language</i>
                  <p>RTL Support</p>
                </a>
              </li>
              <li class="nav-item active-pro ">
                <a class="nav-link" href="./upgrade.html">
                  <i class="material-icons">unarchive</i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="sidebar-background" />
        </div>
        <div class="main-panel">
          <div class="content">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-warning card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">content_copy</i>
                    </div>
                    <p class="card-category">Used Space</p>
                    <h3 class="card-title">
                      49/50
                      <small>GB</small>
                    </h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons text-danger">warning</i>
                      <a href="#pablo">Get More Space...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">store</i>
                    </div>
                    <p class="card-category">Revenue</p>
                    <h3 class="card-title">$34,245</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">date_range</i> Last 24 Hours
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-danger card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">info_outline</i>
                    </div>
                    <p class="card-category">Fixed Issues</p>
                    <h3 class="card-title">75</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">local_offer</i> Tracked from
                      Github
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                      <i class="fa fa-twitter" />
                    </div>
                    <p class="card-category">Followers</p>
                    <h3 class="card-title">+245</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div />{" "}
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div style={{ width: 50, height: 50 }} class="card-icon">
                    <img src="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/eibgv7kctah62iddzywm.webp?alt=media&token=41c3c4b4-bc9c-4c62-8e9c-4971902f614d" />{" "}
                  </div>
                  <p class="card-category">Atharva Vikas Udapure</p>
                  <h3 class="card-title">@udapureav</h3>
                </div>
                dssssssssss
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">local_offer</i> 12 Sept 2018
                  </div>
                </div>
              </div> <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div style={{ width: 50, height: 50 }} class="card-icon">
                    <img src="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/eibgv7kctah62iddzywm.webp?alt=media&token=41c3c4b4-bc9c-4c62-8e9c-4971902f614d" />{" "}
                  </div>
                  <p class="card-category">Atharva Vikas Udapure</p>
                  <h3 class="card-title">@udapureav</h3>
                </div>
                dssssssssss
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">local_offer</i> 12 Sept 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
