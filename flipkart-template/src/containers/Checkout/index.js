import React from 'react';
import Header from '../../components/Header';
import './style.css';
import TextField from '@mui/material/TextField';
import { FaTruck,FaRegBell,FaRegStar } from "react-icons/fa";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    ajay2: {

        width: '100%',
    },

});
const Checkout = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div className='checkout'>
                <div className='checkout_padd'>
                    <div className='login_or_signup'>
                        <h3 className='h3_style'>
                            <span className='small_box'>1</span>
                            <span className='next_style'>Login or Signup</span>
                        </h3>
                        <div className='ckeckout_r'>
                            <div className='check_padd'>
                                <div className='check_input'>
                                    <TextField id="standard-basic"  className={classes.ajay2}  label="Enter Email/Mobile number" variant="standard" />
                                    <div className='input_policy' style={{'margin-top':'22px'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</div>
                                    <div className='input_btn'>
                                            <button className='btn_css btn_imp'>Continue</button>
                                        </div>
                                </div>
                                <div className='advantages'>
                                    <div className='advantages_padd'>
                                        <span style={{'font-size': '14px'}}>Advantages of our secure login</span>
                                        <ul>
                                            <li className='li_style2'>
                                            <FaTruck className='svg_styles' />
                                                <span className='easy_track'>Easily Track Orders, Hassle free Returns</span>
                                            </li>
                                            <li className='li_style2'>
                                            <FaRegBell className='svg_styles' />
                                                <span className='easy_track'>Get Relevant Alerts and Recommendation</span>
                                            </li>
                                            <li className='li_style2'>
                                            <FaRegStar className='svg_styles' />
                                                <span className='easy_track'>Wishlist, Reviews, Ratings and more.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Checkout