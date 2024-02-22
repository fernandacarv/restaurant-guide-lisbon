import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

function EditRestaurants () {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [area, setArea] = useState("");
    const [category, setCategory] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const API_URL = "https://json-server-backend-dkrn.onrender.com";

   useEffect(()=>{
        axios.get(`${API_URL}/restaurants/${id}/edit`).then((response)=>{
            setName(response.data.name);
            setDescription(response.data.description);
            setArea(response.data.area);
            setCategory(response.data.category);
        }).catch((error)=> console.log(error))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = {name, description, area, category};

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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col items-center mb-20 h-1/2">
          <label className='block my-2 text-sm font-medium text-white'>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label className='block my-2 text-sm font-medium dark:text-white'>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
            <label className='block my-2 text-sm font-mediumtext-white'>Location</label>
          <input
            type="text"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
            <label className='block my-2 text-sm font-medium text-gray-900 dark:text-white'>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="rounded-md bg-indigo-600 px-6 py-3 mt-6 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600" type="submit">Update Information</button>
        </form>
        <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent hover:border-indigo-600" onClick={deleteProject}>Delete Restaurant</button>
      </article>
      </div>
    ); 

}

export default EditRestaurants;