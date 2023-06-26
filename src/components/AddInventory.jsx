import React, { useState } from 'react'
import './AddInventory.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AddInventory = () => {

    let navigate=useNavigate()

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
    const onSubmit=async(e)=>{
        e.preventDefault()
         await axios.post("http://localhost:8080/inventory",inventory)
        navigate("/")
    }

  return (
    <div >
      <h2>Register Inventory</h2>
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



export default AddInventory
