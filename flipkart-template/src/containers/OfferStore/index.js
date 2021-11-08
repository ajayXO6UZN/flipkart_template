import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Header from '../../components/Header';
import './style.css';
import Footer from "../../components/Footer";
import PosterSlider from "../../components/PosterSlider";

const OfferStore = () => {
    return (
        <>
            <Header />
            <BreadCrumb />
            <div className='trending_poster'>
                <PosterSlider deals="Furniture Bestsellers" countDown='true' />
            </div>
            <div className='trending_poster'>
                <PosterSlider deals="Discover Best Deals" />
            </div>
            <div className='trending_poster'>
                <PosterSlider deals="Top Offers on Gaming" />
            </div>
            <div className='trending_poster'>
                <PosterSlider deals="Best Battery Phones" />
            </div>
            <Footer />
        </>
    );
}

export default OfferStore