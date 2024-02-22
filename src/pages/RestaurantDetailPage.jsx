import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Review from "../components/Review";
import { Link } from "react-router-dom";

function RestaurantDetailPage() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const API_URL = "http://localhost:5000";
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
        <div className=" shadow-md rounded-xl p-8">
      {restaurantDetails !== null && (
        <div>
          <h1 className="text-3xl font-bold mb-4">{restaurantDetails.name}</h1>
          <p className="text-lg mb-4">{restaurantDetails.description}</p>
          <p className="text-lg mb-4">Price Range: {restaurantDetails.price_range}</p>
          <p className="text-lg mb-4">Ratings: {restaurantDetails.ratings}</p>
          <p className="text-lg mb-4">Location: {restaurantDetails.area}</p>
          <Link to={`/restaurants/${id}/edit`}><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button></Link>
          <div className="mt-4">
            <Review refreshRestaurant={getRestaurant} id={id} setRestaurantDetails = {setRestaurantDetails} restaurantDetails = {restaurantDetails} />
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
  );
};
    

export default RestaurantDetailPage;
