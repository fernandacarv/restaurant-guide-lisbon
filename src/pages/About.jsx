import React from "react";
import NavBar from "../components/NavBar";


function About(){


    return(
        <div>
            <NavBar/>
        <div className='bg-[url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg")] bg-cover bg-center h-screen'>
        <h1 className=" text-center m-10 text-white font-bold mb-60">About us</h1>

        <div className="p-8 m-8 text-center text-white text-4xl semibold" >
        <p>Welcome to our restaurant guide! We are passionate about food and love exploring the culinary world.
     Our aim is to help you discover the best restaurants here in lisbon.</p>
        <p>Whether you're a foodie, a traveler, or just looking for a great place to dine, we've got you covered.
        Explore our curated list of restaurants, add reviews, and find your next favorite spot.
        </p>
        <p> Feel free to reach out to us on Github if you have any questions or suggestions.</p>
        </div>

        <div className="p-20 m-18 flex space-x-3 justify-center" >
        <a className="text-gray px-1 py-1 rounded" href={`${"https://github.com/Egbagba"}`} target="_blank" ><button>Ese Egbagba</button></a>
        <a className="text-gray px-1 py-1 rounded" href={`${"https://github.com/fernandacarv"}`} target="_blank" ><button>Maria Fernanda</button></a>
        </div>


     </div>
     </div>
 )

}


export default About;