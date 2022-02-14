import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import Header from "../../Common/commonComponents/Header";
import SingleProductCard from "./SingleProductCard/SingleProductCard";
import Footer from "../../Common/commonComponents/Footer";
import axios from "axios"
import './Products.css'
import Swal from 'sweetalert2'
import ScrollToTop from "../../Common/commonComponents/ScrollToTop";

const AllProducts = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');



  useEffect(() => {
    fetch("https://serene-refuge-00088.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = productDetails.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(productDetails)
    }
  }




  useEffect(() => {
    document.title = "Car Bd | Products";
  }, []);

  if (productDetails.length === 0) {
    return (
      <>
        <Header></Header>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="success" />
        </div>
      </>
    );
  }

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <section
        id="allproducts"
        className="pt-5 pb-1"
        style={{ background: "#F5FBF9" }}
      >
        <Container>
          <Row>
            <div

              className="col-12 col-md-8 mx-auto"
              data-aos="fade-down"
              data-aos-duration="1500"
            />
            <div style={{ padding: 20 }}>
              <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
              />



              <h6 className="text-light-green text-center">All Products</h6>
              <h2 className="text-center abril-font">Our All Cars</h2>
              <p className="text-center">
                We’ll put your car in ideal condition before the sale. We’ll provide the pre-sell car repair: renovate the exterior and the interior of the car as well
              </p>
            </div>
          </Row>
          <Row xs={1} md={2} lg={3} className="my-5">
            {searchInput.length > 1 ? (
              filteredResults.map((detail) => (
                <SingleProductCard
                  key={detail._id}
                  detail={detail}
                ></SingleProductCard>
              ))
            ) : (
              productDetails.map((detail) => (
                <SingleProductCard
                  key={detail._id}
                  detail={detail}
                ></SingleProductCard>
              ))
            )
            }
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default AllProducts;