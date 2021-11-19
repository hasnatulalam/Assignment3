import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyOrderCard from './MyOrderCard/MyOrderCard'
import useAuth from '../../../Assets/hooks/useAuth'

const MyOrders = () => {    
  const {user} = useAuth();
  
  const [myOrders, setMyOrders] = useState([]);


  useEffect(() => {
    fetch(`https://serene-refuge-00088.herokuapp.com/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [myOrders]);


  return (
    <Container style={{minHeight: '100vh'}}>
      <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">My Orders List</h3>
          <h5 className="text-cyan text-center mb-3">I have Ordered {myOrders.length} Products </h5>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {myOrders.map((detail) => (
          <MyOrderCard key={detail._id}
          detail={detail}>
          </MyOrderCard>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;