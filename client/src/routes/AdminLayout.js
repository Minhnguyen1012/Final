import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AddEditBlogPage from "../pages/AddEditBlogPage";
import ProfilePage from "../pages/Admin/ProfilePage";
import SideMenu from "../pages/Admin/SideMenu";
import DetailPage from "../pages/DetailPage";

import PublicNavbar from "../components/PublicNavbar";
import AlertMsg from "../components/AlertMsg";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route exact path="/admin/profile" component={ProfilePage} />
              <Route exact path="/admin/foods/:id" component={DetailPage} />
              {/* <Route exact path="/admin/blog/add" component={AddEditBlogPage} /> */}
              <Route
                exact
                path="/admin/blog/edit/:id"
                component={AddEditBlogPage}
              />

              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
