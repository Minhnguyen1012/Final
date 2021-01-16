import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import authActions from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/saigonese.png";

import Modals from "./Modals";
import api from "../apiService";
import { toast } from "react-toastify";

const PublicNavbar = () => {
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation;
  const [loadings, setLoadings] = useState(false);
  const [book, setBook] = useState(null);
  const [addingProduct, setAddingProduct] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  const addToCart = (book) => {
    setAddingProduct(book);
  };

  // useEffect(() => {
  //   if (!addingBook) return;
  //   dispatch(bookActions.addBookToReading(addingBook));
  // }, [dispatch, addingBook]);

  // useEffect(() => {
  //   dispatch(bookActions.getSelectedBook(bookId));
  // }, [dispatch, bookId]);

  useEffect(() => {
    const postData = async () => {
      if (!addingProduct) return;
      setLoadings(true);
      try {
        const res = await api.post(`/favorites`, addingProduct);
        setErrorMessage("");
        toast.success("The book is added to reading list");
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoadings(false);
    };
    postData();
  }, [addingProduct]);

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/admin/profile">
        <FontAwesomeIcon icon="chart-line" size="sm" /> Admin
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="sm" /> Logout
      </Nav.Link>
      <Nav.Link>
        <Modals />
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>
          <Nav.Link as={NavLink} exact={true} to="/">
            <img src={logo} alt="CoderSchool" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="All Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Vietnamese Cuisine
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default PublicNavbar;
