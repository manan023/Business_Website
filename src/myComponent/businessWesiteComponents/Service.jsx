import React from 'react'
// import { useState } from "react";
import CardData from "./CardData";
import "./style.css";

export const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                CardData.map((curElem, index) => {
                  return (
                    <div className='col-md-4 col-19 mx-auto' key={index}>
                      <div className="card">
                        <img src={curElem.img} className="card-img-top" alt="Card Image" style={{height: "45vh"}} />
                        <div className="card-body">
                          <h5 className="card-title">{curElem.cardTitle}</h5>
                          <p className="card-text">{curElem.cardDesc}</p>
                          <a to="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


