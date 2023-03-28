import React, { useEffect, Component, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select'; 
import {API_URL} from '../../config.js';


function AddUser({ roleData , groupData}) {
	const [name, setName] = useState([]);
	const [price, setPrice] = useState([]);
	const [quantity, setQuantity] = useState([]);
	const [description, setDescription] = useState([]);


	
	const [errorMessage, setErrorMessage] = useState([]);
	const [successMessage, setSuccessMessage] = useState([]);
	const navigate = useNavigate();
	const handleAddSubmit = async e => {
    e.preventDefault();
	
        
		try {
			const authToken = 'Bearer '+localStorage.getItem('token');
			console.log(authToken);
			
			const response = await axios.post(API_URL+'products', {
				name,
				price,
				quantity,
				description,
			}, {
			  headers: {
				Authorization: authToken,
			  }
			});
		  
		  
		  var result=response.data;
		  if(result.product != undefined)
		  {
			  setSuccessMessage(result.message);
			  window.location.reload();
			  
		  }
		  else
		  {
			  setErrorMessage(result.message);
		  }
  
		} catch (error) {
		  console.log(error.data.message);
		  setErrorMessage(result.message);
		}
	
    }
	

	
 return (
 <div className="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <form onSubmit={handleAddSubmit}>
      <div className="row">
			<div>
			{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

			</div>
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2"> Name</label>

			<input type="text" name="name"  className="form-control" onChange={e => setName(e.target.value)} required />
			</div>
			</div>
			<div className="col-md-6">
				<div className="form-group">
				<label className="bold mb-2">Price</label>
				<input type="text" name="price"  className="form-control" onChange={e => setPrice(e.target.value)}  required />
				</div>
			</div>
			
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2">Quantity</label>
			<input type="text" name="quantity"  className="form-control" onChange={e => setQuantity(e.target.value)} required/>
			</div>
			</div>
			
			
			<div className="col-md-12">
			<div className="form-group">
			<label className="bold mb-2">Description</label>

			<textarea rows="5" name="description" placeholder="Enter file description"  required className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
			
			</div>
			</div>
			<div className="col-12 text-center">
			<button type="submit" className="btn btn-theme">Save changes</button>
			</div>
			</div>

     </form>
      </div>
      
    </div>
  </div>
</div>
)
}

export default AddUser