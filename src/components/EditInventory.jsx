import React, { useEffect, useState } from 'react'
import './EditInventory.css'
import axios from 'axios';


import { Link, useNavigate, useParams } from 'react-router-dom';
const EditInventory = () => {
    let navigate=useNavigate()
     const {id} = useParams()
    const[inventory,setInventory] = useState({
        name:"",
        quantity:"",
        category:"",
        price:"",
        supplier:""
    })

    const{name,quantity,category,price,supplier}=inventory
    const onInputChange = (e) =>{
        setInventory({...inventory,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadInventory();
    },[]);
   
        
     
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8080/inventory/${id}`, inventory);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    
    const loadInventory = async() =>{
        const result = await axios.get(`http://localhost:8080/inventory/${id}`)
        setInventory(result.data)
    }

  return (
    <div >
      <h2>Edit Inventory</h2>
      <form className='container' onSubmit={(e)=> onSubmit(e)} >
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" name="name" className="form-input" value={name} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input type="text" name="quantity" className="form-input" value={quantity} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input type="text" name="category" className="form-input" value={category} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input type="text" name="price" className="form-input" value={price} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="supplier" className="form-label">
            Supplier
          </label>
          <input type="text" name="supplier" className="form-input" value={supplier} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-buttons">
          <button type="submit" className="form-button">
            Submit
          </button>
          <Link type="button" className="form-button" to="/" >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};



export default EditInventory
