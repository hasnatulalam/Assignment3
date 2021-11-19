import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section className="form-container py-5 my-5">
        <Container>
          <Row>
            <div
              className="col-12 col-md-8 mx-auto"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h2 className="text-center display-3 abril-font mt-5 pt-5">
                Stay Tuned All The Time!
              </h2>
              <p className="text-cyan px-md-5 text-center mb-5">
                the unique fiber concentrate for pet food. Improves gut health
                and preventing obesity of animals. Less Feces. Dental Hygiene.
                Anti-hairball-effect. Satiation
              </p>
            </div>
          </Row>
          <Row>
            <div
              className="col-12 col-md-6 "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="https://i.ibb.co/ZgnNPY1/contact2.jpg"
                alt="contactImg"
                className="img-fluid w-100"
              />
            </div>
            <div
              className="col-12 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Form>
                <Row>
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="text-muted fw-semi-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="text-muted fw-semi-bold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <label htmlFor="email" className="text-muted fw-semi-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control border-0 shadow-none py-2 my-2"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="text-muted fw-semi-bold"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                      rows="3"
                      style={{ background: "#F8F8F8" }}
                    ></textarea>
                  </div>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    type="submit"
                    className="btn-light-green p-3 fw-bold shadow-none"
                  >
                    Submit Your Query
                  </Button>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
