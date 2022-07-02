import React from 'react'
import web from '../images/about.jpg';
import { Common } from "./Common";

export const About = () => {
  return (
    <>
      <Common name= "Welcoe to about page" btn="Contact us" visit="/contact" imgSrc={web}/>
    </>
  )
}
