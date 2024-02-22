import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

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

    return (
      <article>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
            <label>Location</label>
          <input
            type="text"
            name="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
            <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Update Project</button>
        </form>
        <button onClick={deleteProject}>Delete Project</button>
      </article>
    ); 

}

export default EditRestaurants;