import React from 'react';
import Header from '../../components/Header';
import deliver from "../../images/deliver.svg";
import './style.css';
import star from "../../images/star2.svg";
import assured from "../../images/assured.png";
import info from "../../images/info.svg";
import location from "../../images/location.svg";
import big from "../../images/big.jpeg";


const ViewCart = () => {
    return (
        <>
            <Header />
            <div className='root_cart_width' style={{ 'margin-bottom': '16px' }} >
                <div className='cart_container'>
                    <div className='root_cart'>
                        <div className='root_my_cart'>
                            <div className='my_cart'>
                                <h3>My Cart (2)</h3>
                            </div>
                            <div className='deliver_to'>
                                <img src={location} alt='not available' />
                                <span className='del_to'>Deliver to</span>
                                <div style={{ margin: '10px 12px' }}>
                                    <span className='del_pincode'>Enter delivery pincode</span>
                                    <span className='del_check'>Check</span>
                                </div>
                            </div>
                        </div>
                        <div className='add_to_cart_pro'>
                            <div className='bread_pro'>
                                <div className='pro_img' style={{ height: '112px', width: '112px' }}>
                                    <img src={big} alt='not avilable' />
                                </div>
                                <div className='product_info'>
                                    <div className='product_details_root'>
                                        <div className='pro_heading'>
                                            <h1 className='heading1'>SAMSUNG Galaxy Z Fold3 5G (Phantom Green, 256 GB)  (12 GB RAM)</h1>
                                        </div>
                                        <div style={{ display: 'flex', 'margin-top': '8pX' }}>
                                            <div>

                                                <span className='rating_rewies'>Seller:Wizrob Fashion</span>
                                            </div>
                                            <span><img src={assured} style={{ height: '15px', margin: '3px 0 0 10px' }} alt='not avalable' /></span>
                                        </div>
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
                                <div className='root_delivery'>
                                    <div className='del_date'>
                                        Delivery by Sun Sep 26 |

                                        <span className='del_free'> Free</span>
                                        <span className='paise'>₹40</span>
                                    </div>

                                </div>
                            </div>
                            <div className='increase_pro' style={{ 'padding-top': '10px' }}>
                                <div className='inc_by_quant'>
                                    <button className='negative' disabled>-</button>
                                    <div className='inc_box'>
                                        <input type='text' value='1' className='quat_box'></input>
                                    </div>
                                    <button className='positive' disabled>+</button>
                                </div>
                                <div className='save_for_later'>
                                    <span className='save_later'>Save For Later</span>
                                    <span className='save_later'>Remove</span>
                                </div>
                            </div>

                        </div>
                        <div className='place_order'>
                            <button>PLACE ORDER</button>
                        </div>
                    </div>
                    <div className='price_details'>
                        <div className='pad_price'>
                        <div className='price_det'>PRICE DETAILS</div>
                        <div className='discount'>
                            <div className='flex_between margin_detail'>
                                <span className='price_item'>Price (1 item)</span>
                                <span>₹2,500</span>
                            </div>
                            <div className='flex_between margin_detail'>
                                <span className='price_item'>Discount</span>
                                <span className='green_pro'>− ₹1,461</span>
                            </div>
                            <div className='flex_between margin_detail'>
                                <span className='price_item'>Delivery Charges</span>
                                <span className='green_pro'>FREE</span>
                            </div>
                        </div>
                        <div className='flex_between margin_detail' style={{padding: '0 24px'}}>
                            <span className='price_item'>Total Amount</span>
                            <span>₹1,039</span>
                        </div>
                        <div className='green_pro killer' >You will save ₹1,461 on this order</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewCart