import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Footer from "../../Common/commonComponents/Footer";
import Header from "../../Common/commonComponents/Header";
import ScrollToTop from "../../Common/commonComponents/ScrollToTop";
import './About.css'

const About = () => {
  useEffect(() => {
        document.title = "Car Bd | About";
      }, []);

  return (
    <section id="about-us-container">
    <ScrollToTop></ScrollToTop>
    <Header></Header>
      <section id="about-us" className="py-5">
        <Container className="text-center">
          <Row data-aos="fade-down"
                data-aos-duration="1500">
            <h3 className="text-center display-2">
              <span className="abril-font">
                <span className="text-light-green">Car</span> Bd
              </span>
            </h3>
          </Row>
          <Row className="my-5" data-aos="fade-up"
                data-aos-duration="1500">
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-key text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Best Car Collection</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
              Car Bd has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created.
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-hands-helping text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">We Value Customers</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
              Our Mission is to simply be the best in every area of our business. We will accomplish this by providing the most exceptional customer experience, being the best place to work, and strongly supporting our community.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-heart text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Expected Output</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan">
              CaLeader will be the number one DMS supplier in terms of market share, or market share growth, in every market in which we choose to compete. 
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-car text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Car Bd</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
              We are so excited to brag about our staff! Our community is where we share expertise and diverse perspectives. You’ll find a group of committed automotive professionals, each one ready to put in the time and effort to ensure your satisfaction.
              </p>
            </div>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8" data-aos="fade-right"
                data-aos-duration="1500">
              <img src="https://i.ibb.co/k5Rbfvq/image.png" alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div data-aos="fade-left"
                data-aos-duration="1500">
                <h2 className="abril-font mb-3 display-2">
                Best Car Sell
                </h2>
                <p className="text-secondary mb-3">
                With history-checked cars and innovative search options, there are many ways CaLeader can help you to find your next vehicle.
                </p>
                <Link to="/products">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold shadow-none">
                    See Our Cars
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default About;
