import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./ManageOrderCard.css";
import Swal from 'sweetalert2'

const ManageOrderCard = ({ detail }) => {

  //delete a package
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure to delete the product?");
    if (proceed) {
      const url = `https://serene-refuge-00088.herokuapp.com/allorder/${id}`;

      fetch(url, {
        method: "DELETE",
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

  const handleUpdate = (id) => {
    const url = `https://serene-refuge-00088.herokuapp.com/allorder/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Product Approved To Ship !'
          )
        }
      });
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
        <Card.Footer>
          <div className="client-info p-2">
            <h6 className="text-cyan">
              {" "}
              <span className="fw-semi-bold">Client Name: </span> {detail?.name}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Email: </span>{" "}
              {detail?.email}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Phone: </span>{" "}
              {detail?.phone}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Address: </span>{" "}
              {detail?.address}
            </h6>
          </div>
        </Card.Footer>
        <Card.Footer className="d-flex justify-content-between">
          <Button
            onClick={() => handleDeleteProduct(detail?._id)}
            className="btn-danger shadow-none text-white py-2 px-1 btn-sm"
          >
            Cancel Order
          </Button>
          <Button
            onClick={() => handleUpdate(detail?._id)}
            className="btn-light-green shadow-none py-2 px-1 btn-sm fw-semi-bold"
          >
            Proceed Shipping
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageOrderCard;
