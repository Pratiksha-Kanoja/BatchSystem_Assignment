import React from 'react';
import './Homepage.css';
import Group from '../Images/Group.png';
import Frame1 from '../Images/Frame1.png';
import Frame2 from '../Images/Frame2.png';
import Frame3 from '../Images/Frame3.png';
import Group6 from '../Images/Group6.png';
import Group7 from '../Images/Group7.png';
import Group9 from '../Images/Group9.png';
import Group8 from '../Images/Group8.png';
import Group10 from '../Images/Group10.png';
import Group11 from '../Images/Group11.png';
import Group12 from '../Images/Group12.png';
import Group13 from '../Images/Group13.png';
import star from '../Images/star.png';
import Star10 from '../Images/Star10.png';
import Star8 from '../Images/Star8.png';
import Star6 from '../Images/Star6.png';
import Star7 from '../Images/Star7.png';
import cube2 from '../Images/cube2.png';
import cube4 from '../Images/cube4.png';
import Ellipse from '../Images/Ellipse.png';
import iPhone1 from '../Images/iPhone1.png'
import { FaRegBell } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdPlayCircleOutline } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Homepage = () => {
    return (
        <div>
            {/* First */}
            <div className='Homepage_first'>
                {/* nav bar */}
                <div className='navbar'>
                    <div>
                        <div><img src={Group} alt="" /></div>
                    </div>
                    <div>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Pricing</p>
                        <p>Features</p>
                    </div>
                    <div>
                        <p>Download</p>
                    </div>
                </div>
                <img src={Star10} alt="" style={{height:"50px",marginTop:"20px",marginLeft:"5%"}}/>
                <div className='HF_title'>
                    <img src={Group7} alt="" />
                    <p>Make The Best Financial Decisions</p>
                    <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu lorem Porttitor.</p>
                </div>
                <div className='HF_right'>
                    <div>
                        <img src={Group7} alt="1" />
                    </div>
                    <div>
                        <img src={Frame1} alt="1" />
                    </div>
                    <div>
                        <img src={Frame2} alt="" />
                    </div>
                    <div>
                        <img src={Frame3} alt="" />
                    </div>
                </div>
                {/* 4th */}
                <div>
                    <div>Get Started <HiOutlineArrowLongRight style={{ marginLeft: "10px" }} /></div>
                    {/* <img src={Group5} alt="" /> */}
                    <div> <MdPlayCircleOutline style={{ fontSize: "30px", marginLeft: "40px", marginTop: "-6px" }} />
                        <p style={{ marginLeft: "10px" }}>Watch Video</p></div>
                </div>


                <img src={Star10} alt="" style={{height:"50px",marginTop:"100px",marginLeft:"20%"}}/>
                <div>
                    <img src={Group6} alt="" /> 
                </div>
                
            </div>

            {/* Second */}
            <img src={Star10} alt="" style={{height:"50px",marginTop:"250px",marginLeft:"2%"}}/>

            <div className='Homepage_second'>
                {/* images */}
                <div className='Homepage_second-img'>
                    <div>
                        <img src={Group7} alt="" />
                    </div>
                    <div>
                        <img src={Group9} alt="" />
                    </div>
                </div>

                {/* Text */}

                <div className='Homepage_second-text'>
                    <p>FEATURES</p>
                    <p>Uifry Premium</p>
                    <div className='HS-text1'>
                        <div>
                            <img src={star} alt="" />
                        </div>
                        <p>Budgeting Intervals</p>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                    </div>
                    <div className='HS-text2'>
                        <div>
                            <img src={cube2} alt="" />
                        </div>
                        <p>Budgeting Intervals</p>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                    </div>
                    <div className='HS-text3'>
                        <div>
                            <img src={cube4} alt="" />
                        </div>
                        <p>Budgeting Intervals</p>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                    </div>
                    <img src={Group8} alt="" />
                </div>
            </div>

            {/* third */}
            <img src={Star8} alt="" style={{height:"50px",marginTop:"-200px",marginLeft:"95%"}}/>

            <div className='Homepage_third'>

                {/* Text */}

                <div className='Homepage_third-text'>
                    <p>ADVANTAGES</p>
                    <p>Why Choose Uifry?</p>
                    <div className='HT-text1'>
                        <div>
                            <div><FaRegBell style={{ marginLeft: "11px", marginTop: "10px", fontSize: "18px", color: "white" }} /></div>
                            <p>Clever Notifications</p>
                        </div>
                        <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                        <img src={Star10} alt="" style={{height:"50px",marginTop:"300px",marginLeft:"500px"}}/>
                    </div>


                </div>


                {/* images */}
                <div className='Homepage_third-img'>
                    <div>
                        <img src={Group7} alt="" />
                    </div>
                    <div>
                        <img src={Group9} alt="" />
                    </div>
                    
                </div>

            </div>

            {/* forth */}

            <div className='Homepage_forth'>
                {/* images */}
                <div className='Homepage_forth-img'>
                    <div>
                        <img src={Group7} alt="" />
                    </div>
                    <div>
                        <img src={Group9} alt="" />
                    </div>
                </div>

                <div className='Hforth-text1'>
                    <div>
                        <div><FaRegBell style={{ marginLeft: "11px", marginTop: "10px", fontSize: "18px", color: "white" }} /></div>
                        <p>Fully Customizable</p>
                    </div>
                    <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                    <img src={Star8} alt="" style={{height:"50px",marginTop:"300px",marginLeft:"380px"}}/>
                </div>
                
            </div>

            {/* fifth */}

            <div className='Homepage_fifth'>
                <p>TESTIMONIAL</p>
                <p>What Our Users Say About Us?</p>
                {/* next */}
                <div className='testimonial'>
                    <div className='testimonial-left'>
                        <img src={Group7} alt="" />
                        <img src={Ellipse} alt="" />
                        <img src={Ellipse} alt="" />
                        <img src={Ellipse} alt="" />
                        <img src={Group10} alt="" />
                        <img src={Star10} alt="" style={{marginLeft:"50px"}}/>
                    </div>
                    <div className='testimonial-right'>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”</p>
                        <div>
                            <img src={Group11} alt="" />
                        </div>
                        <p>Nick Jonas</p>
                    </div>
                </div>
            </div>

            {/* Sixth */}

            <div className='Homepage_six'>

                {/* Text */}

                <div className='Homepage_six-text'>
                    <p>FAQ</p>
                    <p>Frequently Asked Questions</p>
                    <div>
                        <img src={Star8} alt="" style={{marginLeft:"650px",marginTop:"-100px"}}/>
                    </div>
                </div>
                <div className='Homepage_six-content'>
                    <div className='bkg-red'>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                    <div>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                    <div>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                    <div className='bkg-red'>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                    <div className='bkg-red'>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                    <div>
                        <p>The Best Financial Accounting App Ever!</p>
                        <p>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>

                    </div>
                </div>
            </div>

            {/* seven */}
            <div style={{marginTop: "0px", height: "700px" }}>
                <img src={Group7} alt="" style={{ marginLeft: "-100px" }} />
                <div className='Homepage_seven'>
                    <p>Ready To Get Started?</p>
                    <p>Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
                    <div>
                        <img src={Group12} alt="" />
                    </div>
                    <div>
                        <img src={Group13} alt="" />
                    </div>
                    <div>
                        <img src={iPhone1} alt="" />
                    </div>
                    <div>
                        <p style={{ marginLeft: "15px" }}>Download App </p>
                        <FaApple style={{ fontSize: "30px", marginTop: "-6px", marginLeft: "10px" }} />
                    </div>
                    <div style={{ width: "6%", marginTop: "-320px", marginLeft: "60%" }}>
                        <img src={Star7} alt="" />
                    </div>
                    <div style={{ width: "6%", marginTop: "250px", marginLeft: "40%" }}>
                        <img src={Star6} alt="" />
                    </div>
                </div>
            </div>



            {/* eight */}

            <div className='Homepage_eight'>
                <div>
                    <img src={Group} alt="" />
                    <div>
                        <MdEmail style={{ fontSize: "20px", color: "#FF5555" }} />
                        <p>help@frybix.com</p>
                    </div>
                    <div>
                        <FaPhoneAlt style={{ fontSize: "20px", color: "#FF5555" }} />
                        <p>+1 234 456 678 89</p>
                    </div>
                </div>
                <div>
                    <p>Links</p>
                    <p>Home</p>
                    <p>Aout Us</p>
                    <p>Bookings</p>
                    <p>Blog</p>
                </div>
                <div>
                    <p>Legal</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                    <p>cookie Policy</p>
                </div>
                <div>
                    <p>Product</p>
                    <p>Take Tour</p>
                    <p>Live Chat</p>
                    <p>Reviews</p>
                </div>
                <div>
                    <p>Newsletter</p>
                    <p>Stay Up To Date</p>
                    <div>
                        <input placeholder='Your emails'></input>
                        <div>Subscribe</div>
                    </div>
                </div>
            </div>

            {/* nine */}

            <div className='Homepage_nine'>

            </div>
            <p className='copyright'>Copyright 2022 uifry.com all rights reserved</p>


        </div>

    )
}

export default Homepage