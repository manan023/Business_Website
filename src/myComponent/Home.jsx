import React from 'react'
import web from "F:/React Project/Business-website/src/images/startup_img.webp";
import { Common } from "./Common";

export const Home = () => {
    return (
        <>
            <Common name= "Grow Your Business with" btn="Get Started" visit="/service" imgSrc={web}/>
        </>
    )
}


