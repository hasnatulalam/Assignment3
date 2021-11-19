import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Influence = () => {
  return (
    <section className="py-5 my-5">
      <Container>
        <Row>
          <div

            className="col-12 col-md-6"
           
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img  
            
              src="https://i.ibb.co/ZBryw0L/image.png"
             
              alt="about in home"
              className="img-fluid"
             
            />
          </div>
          <div
            className="col-12 col-md-6 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div data-aos= "fade-left" data-aos-duration="1500">
              <h2 className="abril-font mb-3 display-1">
                 Buy Our Awesome Car.
              </h2>
              <p className="text-secondary mb-3">
              
Driving a car is important for people in general because it provides status and the opportunity for personal control and autonomy [29][108]. In sparsely populated areas, owning a car is even more important, since it provides the only opportunity for travelling long distances due to a lack of public transport.
              </p>
              <Link to="/products">
                <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                  Buy Car For Your Family
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Influence;
