import React from "react";
import './style.css';
import flipkartLogo from "../../images/logo/flipkart.png";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import { DropdownMenu, BlueButton } from "../MaterialUI";
import { FaUserCircle, FaHeart, FaGifts, FaRegCreditCard, FaBell, FaShoppingCart } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { GrOrderedList } from "react-icons/gr";
import { BsFillArchiveFill, BsFillQuestionSquareFill, BsGraphUp, BsDownload } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="sub-header">
                    <div className="logo">
                        <a>
                            <img src={flipkartLogo} className="logoimage" alt="logo" style={{ display: 'block' }} />
                        </a>
                        <a class="explore">
                            Explore
                            <span className="plus">Plus</span>
                            <img src={goldenStar} style={{ width: '10px' }} className="goldenStar" alt="logo" />
                        </a>
                    </div>
                    {/* search component */}
                    <div className="searchFlipkart">
                        <div className="searchInputContainer">
                            <input
                                className="searchInput"
                                placeholder={"search for products, brands and more"}
                            />
                            <div className="searchIconContainer">
                                <IoIosSearch
                                    style={{
                                        color: "#2874f0",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* search component ends here */}
                    <DropdownMenu
                        menu={
                            <a
                                className="login-btn"
                            >
                                Login
                            </a>
                        }
                        menus={[
                            { label: "My Profile", href: "", icon: <FaUserCircle className="user-icon" /> },
                            { label: "Flipkart Plus Zone", href: "", icon: <IoAddOutline className="user-icon" /> },
                            {
                                label: "Orders",
                                href: `/account/orders`,
                                icon: <GrOrderedList className="user-icon" />,

                            },
                            { label: "Wishlist", href: "", icon: <FaHeart className="user-icon" /> },
                            { label: "Rewards", href: "", icon: <FaGifts className="user-icon" /> },
                            { label: "Gift Cards", href: "", icon: <FaRegCreditCard className="user-icon" /> },
                        ]}
                        firstMenu={
                            <div className="dropdown-content">
                                <div className="drop-main-header">
                                    <div className="dropdown-header">
                                        <div className="customer">New customer?</div>
                                        <div className="drop-signup">Signup</div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <DropdownMenu
                        menu={
                            <a className="more">
                                <span>More</span>
                                <IoIosArrowDown />
                            </a>
                        }
                        menus={[
                            { label: "Notification Preference", href: "", icon: <FaBell className="user-icon" /> },
                            { label: "Sell on flipkart", href: "", icon: <BsFillArchiveFill className="user-icon" /> },
                            { label: "24x7 Customer Care", href: "", icon: <BsFillQuestionSquareFill className="user-icon" /> },
                            { label: "Advertise", href: "", icon: <BsGraphUp className="user-icon" /> },
                            { label: "Download App", href: "", icon: <BsDownload className="user-icon" /> },
                        ]}
                    />
                    <div className='shopping-cart'>
                        <a>
                            <FaShoppingCart className="cart-icon" />
                            <span className='cart-text'>Cart</span>
                        </a>
                    </div>
                </div>

            </div>
            {/* NAVBAR COMPLETED */}

           
            
        </>
    );
}

export default Header;