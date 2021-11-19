import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <Container fluid>
          <Row>
            <div className="footer py-5  bg-dark d-flex flex-wrap justify-content-around">
              <div className="col-12 col-md-3 text-center">
                {/* Social Icons */}
                <div className="social-links mb-3">
                  <h6 className="text-white ms-2">Car Bd is social</h6>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100007118948045"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-facebook me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-twitter me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-youtube me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://vimeo.com/"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
              {/* Footer text */}
              <div className="col-12 col-md-3 text-center mb-3">
                <div className="terms">
                  <h6 className="text-white">
                  we achieve great results by polishing the car, headlight renovation and interior cleaning and repair. Our service does not have any rivals. Simply, we can return your car to its perfect appearance
                  </h6>
                </div>
              </div>
              {/* Copyright */}
              <div className="col-12 col-md-3 text-center">
                <div className="copyright">
                  <h6 className="text-white mt-2">
                    All rights reserved by Car BD &trade;
                  </h6>
                  <h6 className="text-white mt-2">
                    Developed with{" "}
                    <i className="fa fa-heart text-light-green me-2"></i> by
                    KhorShed.
                  </h6>
                </div>
              </div>
              {/* Quick Links */}
              <div className="col-12 col-md-3 text-center my-3 my-lg-0">
                <div className="terms">
                  <h6 className="text-white">
                    Quick Links:
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <Link
                          to="/"
                          className="text-decoration-none text-light-green fw-semi-bold"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link
                          to="/products"
                          className="text-decoration-none text-light-green fw-semi-bold"
                        >
                          Products
                        </Link>
                      </li>
                      <Link
                        to="/about"
                        className="text-decoration-none text-light-green fw-semi-bold"
                      >
                        About
                      </Link>
                    </ul>
                  </h6>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
