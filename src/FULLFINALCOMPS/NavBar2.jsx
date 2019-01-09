import React, { Component } from "react";
import FF from "../assets/MyImages/beats.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header
        style={{ zIndex: 0, position: "fixed" }}
        className="topbar"
        data-navbarbg="skin6"
      >
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header" data-logobg="skin6">
            {/* This is for the sidebar toggle which is visible on mobile only */}
            <a
              className="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
            >
              <i className="ti-menu ti-close" />
            </a>
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <a className="navbar-brand" href="index.html">
              {/* Logo icon */}
              <b className="logo-icon">
                <h2>{"        "} Atharva</h2>{" "}
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
            </a>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Toggle which is visible on mobile only */}
            {/* ============================================================== */}
            <a
              className="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti-more" />
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg="skin6"
          >
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-left mr-auto">
              <li className="nav-item d-none d-md-block">
                <a
                  className="nav-link sidebartoggler waves-effect waves-light"
                  href="javascript:void(0)"
                  data-sidebartype="mini-sidebar"
                >
                  <i className="sl-icon-menu font-20" />
                </a>
              </li>
              {/* ============================================================== */}
              {/* mega menu */}
              {/* ============================================================== */}
              <li className="nav-item dropdown mega-dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti-gift font-20" />
                </a>
                <div className="dropdown-menu animated bounceInDown">
                  <div className="mega-dropdown-menu row">
                    <div className="col-lg-3 col-xlg-2 m-b-30">
                      <h5 className="m-b-20">Carousel</h5>
                      {/* CAROUSEL */}
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div className="container p-0">
                              <img
                                className="d-block img-fluid"
                                src="../../assets/images/big/img1.jpg"
                                alt="First slide"
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="container p-0">
                              <img
                                className="d-block img-fluid"
                                src="../../assets/images/big/img2.jpg"
                                alt="Second slide"
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="container p-0">
                              <img
                                className="d-block img-fluid"
                                src="../../assets/images/big/img3.jpg"
                                alt="Third slide"
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      {/* End CAROUSEL */}
                    </div>
                    <div className="col-lg-3 m-b-30">
                      <h5 className="m-b-20">Accordion</h5>
                      {/* Accordian */}
                      <div id="accordion">
                        <div className="card m-b-5">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Collapsible Group Item #1
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry.
                            </div>
                          </div>
                        </div>
                        <div className="card m-b-5">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Collapsible Group Item #2
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry.
                            </div>
                          </div>
                        </div>
                        <div className="card m-b-5">
                          <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Collapsible Group Item #3
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3  m-b-30">
                      <h5 className="m-b-20">Contact Us</h5>
                      {/* Contact */}
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputname1"
                            placeholder="Enter Name"
                          />{" "}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />{" "}
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows={3}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="btn btn-info">
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-3 col-xlg-4 m-b-30">
                      <h5 className="m-b-20">List style</h5>
                      {/* List style */}
                      <ul className="list-style-none">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success" /> You can
                            give link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success" /> Give link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success" /> Another
                            Give link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success" /> Forth
                            link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success" /> Another
                            fifth link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* ============================================================== */}
              {/* End mega menu */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Comment */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti-bell font-20" />
                </a>
                <div className="dropdown-menu mailbox animated bounceInDown">
                  <span className="with-arrow">
                    <span className="bg-primary" />
                  </span>
                  <ul className="list-style-none">
                    <li>
                      <div className="drop-title bg-primary text-white">
                        <h4 className="m-b-0 m-t-5">4 New</h4>
                        <span className="font-light">Notifications</span>
                      </div>
                    </li>
                    <li>
                      <div
                        className="message-center notifications ps-container ps-theme-default"
                        data-ps-id="33bfceb9-65b7-c80c-5f24-f624759ae1a6"
                      >
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="btn btn-danger btn-circle">
                            <i className="fa fa-link" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Luanch Admin</h5>
                            <span className="mail-desc">
                              Just see the my new admin!
                            </span>
                            <span className="time">9:30 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="btn btn-success btn-circle">
                            <i className="ti-calendar" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Event today</h5>
                            <span className="mail-desc">
                              Just a reminder that you have event
                            </span>
                            <span className="time">9:10 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="btn btn-info btn-circle">
                            <i className="ti-settings" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Settings</h5>
                            <span className="mail-desc">
                              You can customize this template as you want
                            </span>
                            <span className="time">9:08 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="btn btn-primary btn-circle">
                            <i className="ti-user" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Pavan kumar</h5>
                            <span className="mail-desc">
                              Just see the my admin!
                            </span>
                            <span className="time">9:02 AM</span>
                          </div>
                        </a>
                        <div
                          className="ps-scrollbar-x-rail"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <div
                            className="ps-scrollbar-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                          />
                        </div>
                        <div
                          className="ps-scrollbar-y-rail"
                          style={{ top: 0, right: 3 }}
                        >
                          <div
                            className="ps-scrollbar-y"
                            tabIndex={0}
                            style={{ top: 0, height: 0 }}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        className="nav-link text-center m-b-5"
                        href="javascript:void(0);"
                      >
                        <strong>Check all notifications</strong>
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* ============================================================== */}
              {/* End Comment */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Messages */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href
                  id={2}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="font-20 ti-email" />
                </a>
                <div
                  className="dropdown-menu mailbox animated bounceInDown"
                  aria-labelledby={2}
                >
                  <span className="with-arrow">
                    <span className="bg-danger" />
                  </span>
                  <ul className="list-style-none">
                    <li>
                      <div className="drop-title bg-danger text-white">
                        <h4 className="m-b-0 m-t-5">5 New</h4>
                        <span className="font-light">Messages</span>
                      </div>
                    </li>
                    <li>
                      <div
                        className="message-center message-body ps-container ps-theme-default"
                        data-ps-id="8e61fe7f-856b-0152-cad0-e18271e2edc3"
                      >
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="user-img">
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                            <span className="profile-status online pull-right" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Pavan kumar</h5>
                            <span className="mail-desc">
                              Just see the my admin!
                            </span>
                            <span className="time">9:30 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="user-img">
                            <img
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                            <span className="profile-status busy pull-right" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Sonu Nigam</h5>
                            <span className="mail-desc">
                              I've sung a song! See you at
                            </span>
                            <span className="time">9:10 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="user-img">
                            <img
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                            <span className="profile-status away pull-right" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Arijit Sinh</h5>
                            <span className="mail-desc">I am a singer!</span>
                            <span className="time">9:08 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="message-item">
                          <span className="user-img">
                            <img
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                            <span className="profile-status offline pull-right" />
                          </span>
                          <div className="mail-contnet">
                            <h5 className="message-title">Pavan kumar</h5>
                            <span className="mail-desc">
                              Just see the my admin!
                            </span>
                            <span className="time">9:02 AM</span>
                          </div>
                        </a>
                        <div
                          className="ps-scrollbar-x-rail"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <div
                            className="ps-scrollbar-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                          />
                        </div>
                        <div
                          className="ps-scrollbar-y-rail"
                          style={{ top: 0, right: 3 }}
                        >
                          <div
                            className="ps-scrollbar-y"
                            tabIndex={0}
                            style={{ top: 0, height: 0 }}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        className="nav-link text-center link"
                        href="javascript:void(0);"
                      >
                        <b>See all e-Mails</b>
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* ============================================================== */}
              {/* End Messages */}
              {/* ============================================================== */}
            </ul>
            {/* ============================================================== */}
            {/* Right side toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-right">
              {/* ============================================================== */}
              {/* Search */}
              {/* ============================================================== */}
              <li className="nav-item search-box">
                <a
                  className="nav-link waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-search font-16" />
                </a>
                <form className="app-search position-absolute">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />
                  <a className="srh-btn">
                    <i className="ti-close" />
                  </a>
                </form>
              </li>
              {/* ============================================================== */}
              {/* create new */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flag-icon flag-icon-us font-18" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right  animated bounceInDown"
                  aria-labelledby="navbarDropdown2"
                >
                  <a className="dropdown-item" href="#">
                    <i className="flag-icon flag-icon-us" /> English
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="flag-icon flag-icon-fr" /> French
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="flag-icon flag-icon-es" /> Spanish
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="flag-icon flag-icon-de" /> German
                  </a>
                </div>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                  href
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/1.jpg"
                    alt="user"
                    className="rounded-circle"
                    width={31}
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                  <span className="with-arrow">
                    <span className="bg-primary" />
                  </span>
                  <div className="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                    <div className>
                      <img
                        src="../../assets/images/users/1.jpg"
                        alt="user"
                        className="img-circle"
                        width={60}
                      />
                    </div>
                    <div className="m-l-10">
                      <h4 className="m-b-0">Steave Jobs</h4>
                      <p className=" m-b-0">varun@gmail.com</p>
                    </div>
                  </div>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-user m-r-5 m-l-5" /> My Profile
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-wallet m-r-5 m-l-5" /> My Balance
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-email m-r-5 m-l-5" /> Inbox
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-settings m-r-5 m-l-5" /> Account Setting
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="fa fa-power-off m-r-5 m-l-5" /> Logout
                  </a>
                  <div className="dropdown-divider" />
                  <div className="p-l-30 p-10">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-success btn-rounded"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
