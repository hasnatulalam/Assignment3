import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleProductCard from "../../Products/SingleProductCard/SingleProductCard";

const BestProducts = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch("https://serene-refuge-00088.herokuapp.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  if (productDetails.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <section
      id="best-products"
      className="py-5 my-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h6 className="text-light-green text-center">Best Products</h6>
          <h2 className="text-center abril-font">Our Best Selling Products</h2>
          <p className="text-center">
          For 25 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind. 
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {productDetails.map((detail) => (
            <SingleProductCard
              key={detail._id}
              detail={detail}
            ></SingleProductCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center pt-1 pb-5">
            <Link to="/products">
              <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                Explore All Products
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BestProducts;
