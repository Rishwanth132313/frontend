import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const [inventorys, setInventorys] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadInventorys();
  }, []);

  const loadInventorys = async () => {
     const result = await axios.get('http://localhost:8080/inventorys');
    setInventorys(result.data);
  };

  const deleteInventory = async (id) => {
     await axios.delete(`http://localhost:8080/inventory/${id}`);
    loadInventorys();
  };

  return (
    <div className="home">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventorys.map((inventory, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{inventory.name}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.category}</td>
              <td>{inventory.price}</td>
              <td>{inventory.supplier}</td>
              <td>
                <button className="button">
                  <Link className="button-link" to={`/editinventory/${inventory.id}`}>
                    Edit
                  </Link>
                </button>
                <button className="button button-danger" onClick={() => deleteInventory(inventory.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
