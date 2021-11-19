import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ManageOrderCard from "./ManageOrderCard/ManageOrderCard";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://serene-refuge-00088.herokuapp.com/allorder")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  if (allOrders.length === 0) {
    return (
      <>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="success" />
        </div>
      </>
    );
  }

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">
            Manage All Orders
          </h3>
          <h5 className="text-cyan text-center mb-3">
            Total {allOrders.length} Products Orderd{" "}
          </h5>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {allOrders.map((detail) => (
          <ManageOrderCard key={detail._id} detail={detail}></ManageOrderCard>
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllOrders;