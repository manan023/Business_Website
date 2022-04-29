import React from 'react'
import web from "F:/React Project/Business-website/src/images/about.jpg";
import { Common } from "./Common";

export const About = () => {
  return (
    <>
      <Common name= "Welcoe to about page" btn="Contact us" visit="/contact" imgSrc={web}/>
    </>
  )
}
