import React, { useEffect } from 'react';
import "./Navigation.css"

export default function Navigation() {

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            const nav = document.querySelector(".navigation");
            nav.classList.toggle("sticky", window.scrollY > 0);
        });
    });   

    return (
        <div className="navigation">
            <div className="nav-overlay"></div>
            <div className="nav-bar">
                <div className="nav">
                    <h1 className="logo">Loggo</h1>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Cart</a>
                        </li>
                    </ul>
                </div>
                <div className="icon">
                        <a  href="/"
                        onClick={(e)=>{
                            e.preventDefault();
                            let nav = document.querySelector(".nav-bar")
                            let list = document.querySelector(".nav-items");
                            list.classList.toggle('responsive')
                            nav.classList.toggle('nav-res')
                            }}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </a>
                    </div>
            </div>
        </div>
        
    )
}
