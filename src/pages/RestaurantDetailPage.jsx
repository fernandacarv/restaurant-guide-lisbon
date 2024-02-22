import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Review from "../components/Review";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function RestaurantDetailPage() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const API_URL = "https://json-server-backend-dkrn.onrender.com";
    const navigate = useNavigate();
    const {id} = useParams();

    const getRestaurant = () => {
        axios
          .get(`${API_URL}/restaurants/${id}`)
          .then((response) => {
            const oneRestaurant = response.data;
            setRestaurantDetails(oneRestaurant);
          })
          .catch((error) => console.log(error));
      };
      

    useEffect(() => {
        getRestaurant(); 
    }, []);

    return (
      <div>
        <NavBar/>
        <div className="flex justify-center items-center h-screen">
  <div className="max-w-md p-10">
    {restaurantDetails !== null && (
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={restaurantDetails.image_url} alt="Restaurant" />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{restaurantDetails.name}</h1>
          <p className="text-gray-700 text-base">{restaurantDetails.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price Range: {restaurantDetails.price_range}</p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ratings: {restaurantDetails.ratings}</p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {restaurantDetails.area}</p>
          <Link to={`/restaurants/${id}/edit`}>
          <button className="inline-block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">Edit</button>
        </Link>
        </div>
    
        <div className="mt-4">
          <Review refreshRestaurant={getRestaurant} id={id} setRestaurantDetails={setRestaurantDetails} restaurantDetails={restaurantDetails} />
          {restaurantDetails.reviews && (
            <div>
              <h4 className="text-lg font-bold mb-2">Reviews</h4>
              {restaurantDetails.reviews.map((review, i) => (
                <div key={i} className="mb-4">
                  <h4 className="text-lg font-bold mb-2">{review.username}</h4>
                  <p className="text-lg">{review.userReview}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )}
  </div>
</div>
</div>
  );
}
    

export default RestaurantDetailPage;
