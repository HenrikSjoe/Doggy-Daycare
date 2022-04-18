import React from "react";
import daycare from './img/daycare.jpeg';
import dogbath from './img/dogbath.jpeg';


function Home() {

    return (
        <div className="home">
            <div className="home_info">
                <h2 className="home_welcome">Welcome to</h2>
                <h1 className="home_title">Doggy Daycare</h1>
                <h3>A home away from home for your four-legged family members</h3>
            </div>
            <div className="home_images">
                <img src={daycare} alt="Logo" className="home_image"/>
                <img src={dogbath} alt="Logo" className="home_image"/>
          </div>
        </div>
    )
}

export default Home