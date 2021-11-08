import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Header from '../../components/Header';
import './style.css';
import y from "../../images/y.jpeg";
import l from "../../images/59.jpeg";
import p3 from "../../images/p3.jpeg";
import p4 from "../../images/p4.jpeg";
import ccc from "../../images/ccc.jpeg";
import star from "../../images/star2.svg";
import assured from "../../images/assured.png";
import info from "../../images/info.svg";
import big from "../../images/big.jpeg";
import watchImg1200 from "../../images/watchImg1200.jpg";
import watchImg300 from "../../images/watchImg300.jpg";
import { IoMdHeart, IoIosCart, IoIosFlash, IoIosArrowForward, IoMdStarOutline } from "react-icons/io";
import ReactImageMagnify from 'react-image-magnify';
import images from './images';

const ProductPage = () => {

    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <>
            <Header />
            <BreadCrumb />
            <div className='root_img_gallary'>
                <div className='image_gallary'>
                    <div className='gallary' >
                        <div className='product_img_part_IMP' >
                            <div className='product_img_part1'>
                                <ul>
                                    {
                                        images.map((img, index) => (
                                            <li className='list_main_img_height_width'>
                                                <div className='relative_img'>
                                                    <img
                                                        src={img}
                                                        key={index}
                                                        className='object_fit_img'
                                                        alt='image not shown'
                                                        onMouseOver={() => setSelectedImage(img)}
                                                    />
                                                </div>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='comp_img' >
                            <div className='wid_hei_img' style={{ width: '220px', height: '513px' }} >

                                <ReactImageMagnify  {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: selectedImage,
                                    },
                                    largeImage: {
                                        src: selectedImage,
                                        width: 500,
                                        height: 1200,
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '350%',
                                        height: '120%',
                                    },
                                    enlargedImageContainerStyle: {
                                        position: 'absolute',
                                        top: '-18px',
                                        left: '357px',
                                        'box-shadow': '0 4px 20px 2px rgb(0 0 0 / 20%)',
                                        'transform-origin': ' 50% 50%',
                                        border: '1px solid #e0e0e0',
                                        'border-radius': '4px',
                                        'z-index': '1',
                                        background: '#ffffffff'
                                    }
                                }} />
                                {/* <img src={selectedImage} className='full_img' alt='image not shown' /> */}
                            </div>
                        </div>
                        <div className='heart_img'>
                            <div className=''>
                                <IoMdHeart style={{ fill: '#c2c2c2' }} />
                            </div>
                        </div>
                    </div>
                    <div className='mar_padd'>
                        <div className='padding-btn'>
                            <ul className='padding-btn'>
                                <li style={{ width: '50%' }}>
                                    <button className='addToCart'>
                                        <IoIosCart className='svg_css' />
                                        ADD TO CART
                                    </button>
                                </li>
                                <li style={{ width: '50%' }}>
                                    <button className='addToCart' style={{ background: '#fb641b' }}>
                                        <IoIosFlash className='svg_css' />
                                        BUY NOW
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='root_product'>

                    <div className='path_info' >
                        <ul className='root_path'>
                            <li>
                                <a href='#' className='a_path'>Home</a>
                                <span><IoIosArrowForward className='arrow_css' /></span>
                            </li>
                            <li>
                                <a href='#' className='a_path'>Mobile Accessories</a>
                                <span><IoIosArrowForward className='arrow_css' /></span>
                            </li>
                            <li>
                                <a href='#' className='a_path'>Mobiles</a>
                                <span><IoIosArrowForward className='arrow_css' /></span>
                            </li>
                            <li><a href='#' className='a_path'>Samsung Mobiles</a></li>
                        </ul>
                    </div>
                    <div className='product_details_root'>
                        <div className='pro_heading'>
                            <h1 className='heading1'>SAMSUNG Galaxy Z Fold3 5G (Phantom Green, 256 GB)  (12 GB RAM)</h1>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <span className='rating_star'>4.5<img src={star} alt='not available' /></span>
                                <span className='rating_rewies'>13 Ratings & 0 Reviews</span>
                            </div>
                            <span><img src={assured} style={{ height: '21px', margin: '3px 0 0 10px' }} alt='not avalable' /></span>
                        </div>
                        <div className='extra_offer'>Extra ₹22000 off</div>
                    </div>
                    <div style={{ display: 'flex', 'padding-top': '12px' }}>
                        <div >
                            <span className='exact_money'>₹1,49,999</span>
                            <span className='extra_money'>₹1,71,999</span>
                            <span className='percent_off'>12% off</span>
                        </div>
                        <div className='info_btn'><img src={info} alt='' /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage