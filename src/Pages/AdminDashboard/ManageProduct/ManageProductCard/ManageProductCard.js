import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

const ManageProductCard = ({ detail }) => {

  //delete a product
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    if (proceed) {
      const url = `https://serene-refuge-00088.herokuapp.com/products/${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Successfully Deleted !'
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
            src={detail?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="abril-font fw-semi-bold">
              {detail?.title}
            </Card.Title>
            <h4 className="text-light-green fw-bolder">${detail?.price}</h4>
          </div>

          <p className="text-cyan">{detail?.description}</p>

        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
            <Button onClick={() => handleDeleteProduct(detail?._id)} className="btn-danger shadow-none text-white  py-2 px-3">Delete Product</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageProductCard;
