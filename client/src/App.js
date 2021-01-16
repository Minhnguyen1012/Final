// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import PayNavigation from "./pages/PayNavigation";
import AlertMsg from "./components/Alert";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";
import StoryPage from "./pages/StoryPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authActions from "./redux/actions/auth.actions";
import { ClipLoader } from "react-spinners";
import MessengerCustomerChat from "react-messenger-customer-chat";
const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isAuthenticated === null ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <>
          <AlertMsg />
          <Router>
            <Switch>
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/pay-method" component={PayNavigation} />
              <Route exact path="/story" component={StoryPage} />
            </Switch>
          </Router>
          <MessengerCustomerChat
            pageId="103840071695085"
            appId="150211800209794"
          />

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
