import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./MyOrderCard.css";
import Swal from 'sweetalert2'

const SinglepackageCard = ({ detail }) => {
  

  //delete a package
  const handleDeletePack = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    if (proceed) {
      const url = `https://serene-refuge-00088.herokuapp.com/allorder/${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted Successfully !'
            )
          }
        });
    }
  };

  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.order?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="abril-font fw-semi-bold">
              {detail?.order?.title}
            </Card.Title>
            <h4 className="text-light-green fw-bolder">${detail?.order?.price}</h4>
          </div>

          <p className="text-cyan">{detail?.order?.description}</p>

          {
          detail?.status === 'shipped' ? (<h6 className="text-light-green fw-bolder">
          {" "}
          <span className="text-cyan fw-semi-bolder">
            Order Status:{" "}
          </span>{" "}
          {detail?.status}
        </h6>) : (<h6 className="text-danger fw-bolder">
            {" "}
            <span className="text-cyan fw-semi-bolder">
              Order Status:{" "}
            </span>{" "}
            {detail?.status}
          </h6>) 
        }

        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
            <Button onClick={() => handleDeletePack(detail?._id)} className="btn-danger shadow-none text-white  py-2 px-3">Cancel Order</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
