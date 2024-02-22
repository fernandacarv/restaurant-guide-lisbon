import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    function RestaurantList() {

        const API_URL = "https://json-server-backend-dkrn.onrender.com";

        const [restaurants, setRestaurants] = useState([]);

        useEffect(() => {
        axios.get(`${API_URL}/restaurants`)
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error))
        }, [])

        return (
          <div>
            <NavBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  <h2 className="text-3xl font-bold my-8 col-span-full">Lisbon Restaurant Guide</h2>
  {restaurants && restaurants.map((restaurant) => (
    <div key={restaurant.id} className="m-8">
      <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md rounded-xl">
        <div className="relative overflow-hidden bg-gray-200 rounded-t-xl h-72">
          <img
            src={restaurant.image_url}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-medium text-blue-gray-900">
              {restaurant.name}
            </p>
            <p className="text-lg font-medium text-blue-gray-900">
              {restaurant.price_range}
            </p>
          </div>
          <p className="text-sm font-normal text-gray-700">
            {restaurant.location}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/restaurants/${restaurant.id}`}>
            <button className="w-full bg-gray-100 border px-6 py-3 text-s font-bold uppercase rounded-lg text-blue-gray-900 hover:bg-blue-gray-900/20 focus:bg-blue-gray-900/20 active:bg-blue-gray-900/20 transition duration-300">
              More Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
        );
    }
    
    export default RestaurantList;