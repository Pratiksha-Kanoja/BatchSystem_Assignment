import React from 'react';
import './Homepage.css';
import Navbar from '../Images/Navbar.png';
import Frame1 from '../Images/Frame1.png';
import Frame2 from '../Images/Frame2.png';
import Frame3 from '../Images/Frame3.png';
import Group5 from '../Images/Group5.png';
import Group6 from '../Images/Group6.png';
import Group7 from '../Images/Group7.png';
import Group9 from '../Images/Group9.png';
import star from '../Images/star.png';
import cube2 from '../Images/cube2.png';
import cube4 from '../Images/cube4.png';
import { FaRegBell } from "react-icons/fa6";

const Homepage = () => {
    return (
        <div>
            {/* First */}
            <div className='Homepage_first'>
                {/* nav bar */}
                <div className='navbar'>
                    <img src={Navbar} alt="1" />
                </div>
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
                <div>
                    <img src={Group5} alt="" />
                </div>
                <div>
                    <img src={Group6} alt="" />
                </div>
            </div>

            {/* Second */}

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
                </div>
            </div>

            {/* third */}

            <div className='Homepage_third'>

                {/* Text */}

                <div className='Homepage_third-text'>
                    <p>ADVANTAGES</p>
                    <p>Why Choose Uifry?</p>
                    <div className='HT-text1'>
                        <div>
                            <div><FaRegBell style={{marginLeft:"11px",marginTop:"10px",fontSize:"18px",color:"white"}}/></div>
                            <p>Budgeting Intervals</p>
                        </div>
                        <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
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


        </div>

    )
}

export default Homepage