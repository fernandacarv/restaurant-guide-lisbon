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
        <div className="flex justify-center items-center h-1/2 mt-20">
          <div className="w-4/5 bg-white p-10 border flex rounded overflow-hidden shadow-lg">
            {restaurantDetails !== null && (
              <div className="flex">
                <img className="w-1/2" src={restaurantDetails.image_url} alt="Restaurant" />
                <div className="px-8 py-10 w-1/2">
                  <h1 className="font-bold text-gray-700 text-xl mb-2">{restaurantDetails.name}</h1>
                  <p className="text-gray-700 text-base">{restaurantDetails.description}</p>
                  <div className="py-6">
                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{restaurantDetails.price_range}</p>
                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ratings: {restaurantDetails.ratings}/5 </p>
                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {restaurantDetails.area}</p>
                  </div>
                  <Link to={`/restaurants/${id}/edit`} className="mt-4">
                    <button className="inline-block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">Edit</button>
                  </Link>
                </div>
                {/* Review component remains within the restaurantDetails wrapper */}
                {restaurantDetails !== null && (
                  <div className="mt-4 w-1/2">
                    <Review refreshRestaurant={getRestaurant} id={id} setRestaurantDetails={setRestaurantDetails} restaurantDetails={restaurantDetails} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Review content stays within the restaurantDetails wrapper */}
        {restaurantDetails !== null && restaurantDetails.reviews && (
          <div className="flex justify-center h-1/2">
          <div className="mt-4 w-4/5 bg-gray-100 rounded p-6 items-center border overflow-hidden shadow-lg">
            <h4 className="text-lg font-bold mb-2 text-gray-800">Reviews</h4>
            {restaurantDetails.reviews.map((review, i) => (
              <div key={i} className="mb-4">
                <p className="text-lg text-gray-800">&quot;{review.userReview}&quot;</p>
                <h4 className="text-mg font-bold mb-2 text-gray-800">{review.username}</h4>
              </div>
            ))}
          </div>
        </div>)}
      </div>
    );
                  }
    

export default RestaurantDetailPage;
