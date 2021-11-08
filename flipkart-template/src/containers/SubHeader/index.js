import React from 'react';
import a from "../../images/a.png";
import { NavLink } from "react-router-dom";

const menus=[
    { offer: "My Profile", img:"Top offers" },
    { offer: "Grocery", img:"Top offers" },
    { offer: "Mobiles", img:"Top offers"},
    { offer: "Fashion", img:"Top offers" },
    { offer: "Electronics", img:"Top offers" },
    { offer: "Home", img:"Top offers" },
    { offer: "Appliances", img:"Top offers" },
    { offer: "Travel", img:"Top offers" },
    { offer: "Beauty, Toys, & More", img:"Top offers" },
]

const SubHeader = ()=> {

    return (
       <>
        <div className="breadcrumb-part1">
        <div className="breadcrumb-container flex-demo box-shadow">
            <div className="bread-container">
                <div className='bread-images'>
                    <NavLink to={`/offer-store`}>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </NavLink>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
                <div className='bread-images'>
                    <a>
                        <div class='handle-img'>
                            <img src={a} style={{ width: '64px', height: '64px' }} alt="bread-images" />
                        </div>
                        <div class='offers'>Top offers</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
       </>
    );
}

export default SubHeader