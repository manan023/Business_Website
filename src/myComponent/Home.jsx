import React from 'react'
import web from "../images/startup_img.webp";
import { NavLink } from "react-router-dom";
import { Common } from "./Common";

export const Home = () => {
    return (
        <>
            <Common name= "Grow Your Business with" btn="Get Started" visit="/service" imgSrc={web}/>
        </>
    )
}


