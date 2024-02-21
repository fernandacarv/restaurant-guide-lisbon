import React from "react";


function About(){


    return(
        <div>
           <h1 className="about-page">About us</h1> 
           <p>Welcome to our restaurant guide! We are passionate about food and love exploring the culinary world.
        Our aim is to help you discover the best restaurants here in lisbon.</p>
           <p>Whether you're a foodie, a traveler, or just looking for a great place to dine, we've got you covered. <br />
           Explore our curated list of restaurants, add reviews, and find your next favorite spot.
           </p>
           <p> Feel free to reach out to us on Github if you have any questions or suggestions.</p>
           <a href={`${"https://github.com/Egbagba"}`} target="_blank" rel="noopener noreferrer"><button>Ese Egbagba</button></a>
           <a href={`${"https://github.com/fernandacarv"}`} target="_blank" rel="noopener noreferrer"><button>Maria Fernanda</button></a>


        </div>
    ) 

}


export default About;