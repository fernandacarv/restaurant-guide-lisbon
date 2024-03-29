import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar';


const API_URL = "https://json-server-backend-dkrn.onrender.com";

function AddRestaurantPage(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [area, setArea] = useState("");
    const [image_url, setImage_url] = useState("");
    const [ratings, setRatings] = useState("");
    const [price_range, setPrice_range] = useState("");

   const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const restaurant = {name, description, category, area, image_url, price_range, ratings};

        axios.post(`${API_URL}/restaurants`, restaurant)
        .then(()=> navigate("/restaurants"))
        .catch((error)=> console.log(error));

    }
    return (
      <div className="h-screen">
        <NavBar/>
        <h2 className="my-24 mb-4 text-lg">Add New Restaurant</h2>
      <form className="max-w-md mx-auto flex flex-col items-center mb-20 h-1/2" onSubmit={handleSubmit}>
        <label className='block my-2 text-sm font-medium text-white'>Title</label>
        <input className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {name} name="title" type="text" required onChange={(e)=> setName(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Description</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {description} name="description" type="text" required onChange={(e)=> setDescription(e.target.value)} />
        <label className='block my-2 text-sm font-medium text-white'>Category</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {category} name="category" type="text" required onChange={(e)=> setCategory(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Location</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {area} name="area" type="text" required onChange={(e)=> setArea(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Price Range</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {price_range} name="Price Range" type="text" required onChange={(e)=> setPrice_range(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Ratings</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {ratings} name="ratings" type="text" required onChange={(e)=> setRatings(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Insert Picture URL</label>
        <input className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value = {image_url} name="area" type="text" required onChange={(e)=> setImage_url(e.target.value)}/>
        <button className="rounded-md bg-indigo-600 px-6 py-3 mt-6 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600" type="submit">Add New Restaurant</button>
      </form>
      </div>
    );
}

export default AddRestaurantPage