import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ManageProductCard from './ManageProductCard/ManageProductCard'

const ManageProduct = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch("https://serene-refuge-00088.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productDetails]);

  if (productDetails.length === 0) {
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
    <>
      <section
        id="allproducts"
        className="pt-5 pb-1"
        style={{ background: "#F5FBF9" }}
      >
        <Container>
        <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">Manage All Products</h3>
          <h5 className="text-cyan text-center mb-3">There are {productDetails.length} products available now in Car Bd </h5>
        </div>
      </Row>
          <Row xs={1} md={2} lg={3} className="my-5">
            {productDetails.map((detail) => (
              <ManageProductCard
                key={detail._id}
                detail={detail}
              ></ManageProductCard>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ManageProduct;
