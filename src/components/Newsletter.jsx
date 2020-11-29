import React from 'react';
import "./Newsletter.css"

export default function Newsletter() {
    return (
        <div className="newsletter">
            <hr/>
            <h2>Subscribe to our newsletter</h2>
            <form className="newsletter-form">
                <input type="email" name="email" id="email" placeholder="your@gmail.com"/>
                <input type="button" value="subscribe"/>
            </form>
        </div>
    )
}
