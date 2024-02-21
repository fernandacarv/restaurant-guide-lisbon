import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = "https://json-server-backend-dkrn.onrender.com/";

function Review(props) {
    const [userReview, setUserReview] = useState("");
    const [username, setUsername] = useState("");
    const [reviews, setReviews] = useState([]);
    const {id, setRestaurantDetails, restaurantDetails} = props

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newReview = { username: username, userReview: userReview };
        const updatedRestaurantDetails = {...restaurantDetails, reviews:[...restaurantDetails.reviews, newReview]}
        setRestaurantDetails((previous) => { return {...previous, reviews:[...restaurantDetails.reviews, newReview]}});

        console.log(updatedRestaurantDetails);
      
        axios.put(`${API_URL}/restaurants/${id}`, updatedRestaurantDetails)
            .then(() => {
                setUserReview("");
                setUsername("");
                // Refresh reviews for the restaurant after adding a new review
                axios.get(`${API_URL}/restaurants/${id}`)
                    .then(response => {
                        setReviews(response.data.reviews);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
   
    };
    return (
        <article>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"htmlFor="username">Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </div>
                <div className='mb-5'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="userReview">Write a review:</label>
                <input
                    type="text"
                    id="userReview"
                    name="userReview"
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    required
                />
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
            </form>
        </article>
    );
}

export default Review;