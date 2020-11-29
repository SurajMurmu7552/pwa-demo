import React from 'react';
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home-heading">
                <h2>Get your shoes now </h2>
                <p><a href="http://" target="_blank" rel="noopener noreferrer">shop now</a></p>
            </div>
            <div className="home-img-overlay"></div>
            <div className="home-img"></div>
        </div>
    )
}