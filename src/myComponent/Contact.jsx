import React from 'react'
import "./style.css";
import { useState } from "react";

export const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: ""
    });

    const inputEvent = (e) => {
        // console.log(e.target.value);
        const name = e.target.name
        const value = e.target.value

        setData((preVal) => {

            return {
                ...preVal, [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is  ${data.fullName}. Mobile no. is ${data.phone} and Email is ${data.email}`);
    }
    return (

        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto check'>
                        <form action="" onSubmit={formSubmit}>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name='fullName' value={data.fullName} onChange={inputEvent} />
                            </div>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="Mobile" name='phone' value={data.phone} onChange={inputEvent} />
                            </div>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={data.email} onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label to="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={inputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
