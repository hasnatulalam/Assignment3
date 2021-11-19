import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner mb-5">
      <Container>
        <Row>
          <div className="col-12">
            <div
              className="px-lg-5 py-5 py-lg-0 d-flex align-items-center justify-content-between"
              style={{ minHeight: "90vh" }}
            >
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <h1 className="text-white display-2 fw-bolder px-2 mb-3 mb-lg-0">
                  Best Car Shop
                </h1>
                <p className="text-white px-2">
                If you're new to car buying or haven't made a purchase in many years, it can be hard to know where to begin. How do you find the car that will exactly suit your needs for years to come? It just takes a little research and planning. When you know the kind of car you want, you can then decide whether you want to buy a new car, lease a new car, or buy a used car.
                </p>
                <Link to="/products">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                    Explore All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
