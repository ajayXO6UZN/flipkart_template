import React from 'react';
import Header from '../../components/Header';
import SubHeader from '../SubHeader';
import PosterSlider from "../../components/PosterSlider";
import jo from "../../images/jo.jpg";
import Slider from '../../components/Crousal/Slider';
import images from '../../components/Header/images'
import {  BlueButton } from "../../components/MaterialUI";
import Footer from "../../components/Footer";

const HomePage= () => {
    return (
        <>
        <Header />
         <SubHeader />  
         <div style={{ padding: '8px' }}>
                <div style={{ padding: '0px 0px 10px 0px' }}></div>
                <Slider slides={images} autoPlay={3} />
            </div>
            <div className='deals_with_poster'>
                <PosterSlider deals="Deals of the Day" countDown='true' arrow_right='245' arrow_left='0' />
                <div className='poster'>
                    <img src={jo} style={{ 'max-width': '100%', 'max-height': '100%' }} alt="bread-images" />
                </div>

            </div>
            <div className='trending_poster'>
                <PosterSlider deals="Furniture Bestsellers" />
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

export default HomePage;

