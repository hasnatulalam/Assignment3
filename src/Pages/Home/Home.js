import React, { useEffect } from 'react';
import Header from '../../Common/commonComponents/Header'
import Banner from './Banner/Banner';
import BestProducts from './BestProducts/BestProducts';
import Influence from './Influence/Influence'
import Contact from './Contact/Contact'
import Footer from '../../Common/commonComponents/Footer'
import Reviews from './ReviewSection/ReviewSection';
import './Home.css';
import ScrollToTop from '../../Common/commonComponents/ScrollToTop';

const Home = () => {
    useEffect(() => {
        document.title = "Car Bd | Home";
      }, []);
    return (
        <>
        <Header></Header>
        <div id="home">
        <ScrollToTop></ScrollToTop>
         <Banner></Banner>
         <BestProducts></BestProducts>
         <Influence></Influence>
         <Reviews></Reviews>
         <Contact></Contact>
         <Footer></Footer>
        </div>
        </>
    );
};

export default Home;