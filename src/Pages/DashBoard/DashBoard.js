import React, { useEffect, useState } from "react";
import { Col, Container, Row, Offcanvas } from "react-bootstrap";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import CustomerReview from "../UserDashboard/CustomerReview/CustomerReview";
import MyOrders from "../UserDashboard/MyOrders/MyOrders";
import PayBill from "../UserDashboard/PayBill/PayBill";
import "./Dashboard.css";
import logo from "../../Assets/images/dashboardimg.png";
import MakeAdmin from "../AdminDashboard/MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../AdminDashboard/ManageProduct/ManageProduct";
import ManageAllOrders from "../AdminDashboard/ManageAllOrders/ManageAllOrders";
import useAuth from "../../Assets/hooks/useAuth";
import Profile from "./Profile/Profile";
import AdminRoute from "../../Common/utilityComponents/AdminRoute";
import NotFound from "./NotFound/NotFound";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    document.title = "Car Bd | DashBoard";
  }, []);

  return (
    <div>
      <div>
        <div className="mobilebar d-none">
          <div className=" d-flex justify-content-between align-items-center flex-bg px-3">
            <button
              className="border-0 bg-transparent"
              style={{ borderRadius: 0, textAlign: "left" }}
              onClick={handleShow}
            >
              <i
                style={{ color: "red" }}
                className="fas fa-2x fa-angle-double-right"
              ></i>
            </button>
            <div>
              <img
                src={logo}
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose} className="w-75">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>DashBoard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            {!admin && (
              <>
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-shopping-basket me-2"></i>
                  <NavLink to={`${url}/myorder`}>My Orders</NavLink>
                </div>
                <br />
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-comment me-2"></i>
                  <NavLink to={`${url}/customerReview`}>Review</NavLink>
                </div>
                <br />
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
                </div>
              </>
            )}
            <br />
            {admin && (
              <>
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-user me-2"></i>
                  <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                </div>
                <br />
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-plus me-2"></i>
                  <NavLink to={`${url}/addProduct`}>Add Product</NavLink>
                </div>
                <br />
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-clock me-2"></i>
                  <NavLink to={`${url}/manageProduct`}>
                    Manage All Products
                  </NavLink>
                </div>
                <br />
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleClose}
                >
                  <i className="fas fa-cannabis me-2"></i>
                  <NavLink to={`${url}/manageOrder`}>Manage All Orders</NavLink>
                </div>{" "}
              </>
            )}
            <hr />
            <div
              className="d-flex justify-content-start align-items-center"
              onClick={handleClose}
            >
              <i className="fas fa-user-tie me-2"></i>
              <NavLink to={`${url}`}>Profile</NavLink>
            </div>
            <div
              className="d-flex justify-content-start align-items-center mt-2"
              onClick={handleClose}
            >
              <i className="fas fa-home me-2"></i>
              <NavLink to="/home">Back to home</NavLink>
            </div>
            <div className="d-flex justify-content-start align-items-center mt-2">
              <i className="fas fa-sign-out-alt me-2"></i>
              <NavLink to="/login" onClick={logOut}>
                Logout
              </NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div>
          <div className="logo-bg d-lg-flex justify-content-center single-dog">
            <img
              style={{ height: "80px" }}
              className="d-block mx-auto"
              src={logo}
              alt=""
            />
            
          </div>
          <Container fluid>
            <Row>
              <Col className="my-col text-left pt-5" lg={2}>
                {!admin && (
                  <>
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-shopping-basket me-2"></i>
                      <NavLink to={`${url}/myorder`}>My Orders</NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-comment me-2"></i>
                      <NavLink to={`${url}/customerReview`}>Review</NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-shopping-cart me-2"></i>
                      <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
                    </div>
                  </>
                )}
                <hr />
                {admin && (
                  <>
                    <div className="d-flex justify-content-start align-items-center">
                    <i className="fas fa-user me-2"></i>
                      <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-plus me-2"></i>
                      <NavLink to={`${url}/addProduct`}>Add Product</NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-clock me-2"></i>
                      <NavLink to={`${url}/manageProduct`}>
                        Manage All Products
                      </NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fas fa-cannabis me-2"></i>
                      <NavLink to={`${url}/manageOrder`}>
                        Manage All Orders
                      </NavLink>
                    </div>{" "}
                  </>
                )}

                <hr />
                <div className="d-flex justify-content-start align-items-center">
                  <i className="fas fa-user-tie me-2"></i>
                  <NavLink to={`${url}`}>Profile</NavLink>
                </div>
                <div className="d-flex justify-content-start align-items-center mt-2">
                  <i className="fas fa-home me-2"></i>
                  <NavLink to="/home">Back to home</NavLink>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  <NavLink to="/login" onClick={logOut}>
                    Logout
                  </NavLink>
                </div>
              </Col>
              <Col xs={12} lg={10}>
                <Switch>
                  <Route exact path={path}>
                    <Profile />
                  </Route>
                  {!admin && (
                    <Switch>
                      <Route path={`${path}/myorder`}>
                        <MyOrders />
                      </Route>
                      <Route path={`${path}/customerReview`}>
                        <CustomerReview />
                      </Route>
                      <Route path={`${path}/payBill`}>
                        <PayBill />
                      </Route>
                      <Route path="*">
                        <NotFound></NotFound>
                      </Route>
                    </Switch>
                  )}
                  <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                  </AdminRoute>
                  <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct />
                  </AdminRoute>
                  <AdminRoute path={`${path}/manageProduct`}>
                    <ManageProduct />
                  </AdminRoute>
                  <AdminRoute path={`${path}/manageOrder`}>
                    <ManageAllOrders />
                  </AdminRoute>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
