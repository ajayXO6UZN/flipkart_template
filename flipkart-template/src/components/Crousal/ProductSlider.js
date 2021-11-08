import React, { useState } from "react";
import a from "../../images/a.png";
import Arrow from './Arrow';
import SliderContent from './SliderContent';
import {NavLink} from 'react-router-dom';

const getWidth = () => window.innerWidth

const ProductSlider = (props) => {
let left_arr,right_arr;
    let ajay = props.arrow_slider_left;
    if (ajay) {
        left_arr = ajay;
    } else {
        left_arr = 0;
    }
    let anuj = props.arrow_slider_right;
    if (anuj) {
        right_arr = anuj;
    } else {
        right_arr = 0;
    }

    console.log(getWidth());
    const [state, setState] = useState({
        activeSlide: 0,
        translate: 0,
        transition: 0.45
    })

    const { translate, transition } = state

    const nextSlide = () => {

        setState({
            ...state,

            translate: 197,
            transition: 0.45
        })
    }

    const prevSlide = () => {


        setState({
            ...state,
            translate: -197,
            transition: 0.10
        })
    }

    return (
        <>
            <div className='Product_Slider'>
                <SliderContent
                    translate={translate}
                    transition={transition}
                    width={'1560px'}

                >
                    <div className='poster_item'>
                        <div className='poster_anchor'>
                            <NavLink className='single_poster' to={`/product-page`}>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </NavLink>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                        <div className='poster_anchor'>
                            <a className='single_poster'>
                                <div className='poster_img'>
                                    <img src={a} alt="omg" />
                                </div>
                                <div className='poster_heading'>Gas Stoves</div>
                                <div className='poster_price'>From 999</div>
                                <div className='poster_brand'>Prestige, Pigeon &amp; more</div>
                            </a>
                        </div>
                    </div>
                </SliderContent>
                <Arrow direction="left" handleClick={prevSlide} left={left_arr} />
                <Arrow direction="right" handleClick={nextSlide} right={right_arr} />

            </div>

        </>
    );
}

export default ProductSlider