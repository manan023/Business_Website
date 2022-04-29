import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="text-center p-2" style={{backgroundColor:" rgba(0, 0, 0, 0.05)", marginTop:"20vh"}}>
                    © 2021 Copyright: visit our website  
                    <NavLink className="text-reset fw-bold" to="https://mdbootstrap.com/"> cyberking.com</NavLink>
                </div>
            </footer>
        </>
    )
}
