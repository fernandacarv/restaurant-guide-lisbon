import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

function EditRestaurants () {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [image_url, setImage_url] = useState("");
  const [ratings, setRatings] = useState("");
  const [price_range, setPrice_range] = useState("");
 

    const {id} = useParams();
    const navigate = useNavigate();

    const API_URL = "https://json-server-backend-dkrn.onrender.com";

   useEffect(()=>{
        axios.get(`${API_URL}/restaurants/${id}/edit`).then((response)=>{
            setName(response.data.name);
            setDescription(response.data.description);
            setArea(response.data.area);
            setCategory(response.data.category);
            setImage_url(response.data.image_url);
            setRatings(response.data.ratings);
            setPrice_range(response.data.price_range);
        }).catch((error)=> console.log(error))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = {name, description, area, category, price_range, image_url, ratings};

        axios.put(`${API_URL}/restaurants/${id}/`, data)
        .then(()=>{
            navigate(`/restaurants/${id}`);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const deleteProject = () =>{
        axios.delete(`${API_URL}/restaurants/${id}` ).then(()=>{
            navigate("/restaurants");
        })
        .catch((error)=>console.log(error));
    }

    return (<div>
      <NavBar/>
      <article>
        <h2 className="my-24 mb-4 text-lg text-white">Edit Restaurant</h2>
        <form className="max-w-md mx-auto flex flex-col items-center mb-20 h-1/2" onSubmit={handleSubmit}>
        <label className='block my-2 text-sm font-medium text-white'>Title</label>
        <input className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value = {name} name="title" type="text" required onChange={(e)=> setName(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Description</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value = {description} name="description" type="text" required onChange={(e)=> setDescription(e.target.value)} />
        <label className='block my-2 text-sm font-medium text-white'>Category</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value = {category} name="category" type="text" required onChange={(e)=> setCategory(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Location</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value = {area} name="area" type="text" required onChange={(e)=> setArea(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Price Range</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value = {price_range} name="Price Range" type="text" required onChange={(e)=> setPrice_range(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Ratings</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value = {ratings} name="ratings" type="text" required onChange={(e)=> setRatings(e.target.value)}/>
        <label className='block my-2 text-sm font-medium text-white'>Insert Picture URL</label>
        <input className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 " value = {image_url} name="area" type="text" onChange={(e)=> setImage_url(e.target.value)}/>
          <button className="rounded-md bg-indigo-600 px-6 py-3 mt-6 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600" type="submit">Update Information</button>
        </form>
        <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600" onClick={deleteProject}>Delete Restaurant</button>
      </article>
      </div>
    ); 

}

export default EditRestaurants;