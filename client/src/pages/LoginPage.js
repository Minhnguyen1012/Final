import React, { useEffect, useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import { Redirect, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo2 from "../images/logo2.png";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";

import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import routeActions from "../redux/actions/route.actions";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const [state, setState] = useState({
    collapseID: "",
  });

  const toggleCollapse = (collapseID) =>
    setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={() => toggleCollapse("navbarCollapse")}
    />
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleTyping = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (redirectTo) {
  //     if (redirectTo === "__GO_BACK__") {
  //       history.goBack();
  //       dispatch(routeActions.removeRedirectTo());
  //     } else {
  //       history.push(redirectTo);
  //       dispatch(routeActions.removeRedirectTo());
  //     }
  //   }
  // }, [dispatch, history, redirectTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // if (password.length < 3) {
    //   setErrors({ ...errors, password: "Password must be longer than 3" });
    dispatch(authActions.loginRequest({ email, password }));
  };

  const loginWithFacebook = (response) => {
    dispatch(authActions.loginFacebook(response.accessToken));
  };
  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogle(response.accessToken));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div id="loginn">
      <Router>
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <Navbar.Brand>
                <MDBNavLink as={NavLink} exact={true} to="/">
                  <img src={logo2} alt="CoderSchool" />
                </MDBNavLink>
              </Navbar.Brand>
              <MDBNavbarToggler
                onClick={() => toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse id="navbarCollapse" isOpen={state.collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem></MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {state.collapseID && overlay}
        </div>
      </Router>
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
              >
                <h1 className="h1-responsive font-weight-bold">Sign in</h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                  quisquam iste, maiores. Nulla.
                </h6>
                <MDBBtn outline color="white">
                  Learn More
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md="6" xl="5" className="mb-4">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" />
                      </h3>
                      <hr className="hr-light" />
                      <form onSubmit={handleSubmit}>
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          name="email"
                          onChange={handleTyping}
                          value={formData.email}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          name="password"
                          type="password"
                          onChange={handleTyping}
                          value={formData.password}
                        />

                        <MDBBtn color="indigo" type="submit">
                          Sign In
                        </MDBBtn>
                      </form>

                      <div className="d-flex flex-column text-center">
                        <FacebookLogin
                          appId={FB_APP_ID}
                          fields="name,email,picture"
                          callback={loginWithFacebook}
                          icon="fa-facebook"
                          onFailure={(err) => {
                            console.log("FB LOGIN ERROR:", err);
                          }}
                          containerStyle={{
                            textAlign: "center",
                            backgroundColor: "#3b5998",
                            borderColor: "#3b5998",
                            flex: 1,
                            display: "flex",
                            color: "#fff",
                            cursor: "pointer",
                            marginBottom: "3px",
                          }}
                          buttonStyle={{
                            flex: 1,
                            textTransform: "none",
                            padding: "12px",
                            background: "none",
                            border: "none",
                          }}
                        />

                        <GoogleLogin
                          className="google-btn d-flex justify-content-center"
                          clientId={GOOGLE_CLIENT_ID}
                          buttonText="Login with Google"
                          onSuccess={loginWithGoogle}
                          onFailure={(err) => {
                            console.log("GOOGLE LOGIN ERROR:", err);
                          }}
                          cookiePolicy="single_host_origin"
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ color: "white" }}>
                          Don't have an account?{" "}
                          <Link to="/register">Sign Up</Link>
                        </p>
                      </div>

                      <hr className="hr-light" />
                      <div className="text-center d-flex justify-content-center white-label">
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="twitter" className="white-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="linkedin" className="white-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon
                            fab
                            icon="instagram"
                            className="white-text"
                          />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="facebook" className="white-text" />
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
};
export default LoginPage;
