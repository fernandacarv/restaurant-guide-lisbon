import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import background from "../assets/images/background.jpg"

function HomePage () {
    return (
        <div className="relative">
        <div className="h-screen flex flex-col justify-center items-center relative">
          <div className="absolute inset-0 w-full h-full bg-opacity-25">
            <img className="demo-bg object-cover w-full h-full" src={background} alt="" />
          </div>
          
          <div className="navbar absolute top-0 w-full z-10">
            <NavBar transparent={true} />
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Fulfill Your Appetite and Discover the Best Restaurants in Lisbon
            </h1>
            <p className="mt-6 text-2xl text-center text-white">
              Explore a diverse range of culinary experiences in Lisbon, from traditional Portuguese dishes to international cuisines.
            </p>
            <div className="mt-10">
              <Link to="/restaurants">
                <button className="bg-gray-200 border border-transparent rounded-md py-3 px-8 inline-flex items-center text-base font-medium text-black hover:bg-gray-100">
                  Explore Restaurants
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
);
}

    

export default HomePage;