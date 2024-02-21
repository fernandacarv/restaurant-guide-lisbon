import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomePage () {
    return (
        <div className="relative">
        <div
            className=" h-screen flex flex-col justify-center items-center relative"
            style={{
                backgroundImage: "url('src/assets/images/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Fulfill Your Appetite and Discover the Best Restaurants in Lisbon
                </h1>
                <p className="mt-6 text-2xl text-center text-white">
                    Explore a diverse range of culinary experiences in Lisbon, from
                    traditional Portuguese dishes to international cuisines.
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