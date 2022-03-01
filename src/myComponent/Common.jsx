import React from 'react'
// import web from "F:/React Project/multipage-website/src/images/coffee.jpg";
import { NavLink } from "react-router-dom";

export const Common = (props) => {
    const styleHome= {
        marginTop: "40px",
        border: "0px solid red"
    }
    return (
        <>
            <section id='header' className=''>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' style={styleHome}>
                                    <h1>{props.name }<strong className='brand-name'>Cyber_king</strong></h1>
                                    <h2 className='my-3'>We are of talented developer making websites</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgSrc} alt="home img" className='img-fluid-animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
