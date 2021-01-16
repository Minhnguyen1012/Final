import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authActions from "../redux/actions/auth.actions";
import TextField from "@material-ui/core/TextField";
import logo2 from "../images/ganh-hang-rong.png";
import routeActions from "../redux/actions/route.actions";
import { MDBAnimation, MDBCard, MDBCardBody, MDBCol } from "mdbreact";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const history = useHistory();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }
    dispatch(authActions.register({ name, email, password }));
  };

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [dispatch, history, redirectTo]);

  return (
    <div>
      <Row>
        <Col lg={5}>
          <MDBCol className="mt-5 ml-4">
            <MDBAnimation type="fadeInRight" delay=".3s">
              <MDBCard id="classic-card">
                <MDBCardBody>
                  <div className="text-center mb-3">
                    <h1 className="poppin">Sign Up</h1>
                    <p className="lead">
                      <FontAwesomeIcon icon="user" size="1x" /> Create Your
                      Account
                    </p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      {/* <TextField
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="Avatar"
                        name="avatarUrl"
                        value={formData.avatarUrl}
                        onChange={handleChange}
                      /> */}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="form-text text-danger">
                          {errors.name}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="form-text text-danger">
                          {errors.email}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <small className="form-text text-danger">
                          {errors.password}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    {loading ? (
                      <Button
                        className="btn-block"
                        variant="primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        className="btn-block"
                        type="submit"
                        variant="primary"
                      >
                        Register
                      </Button>
                    )}

                    <p>
                      Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </Form>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </Col>
        <Col lg={5}>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-w/15/26/4c/0e/crispy-brown-rice.jpg"
            alt="CoderSchool"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
