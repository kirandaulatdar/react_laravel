import React, { useEffect, Component, useState,useRef  } from 'react';
import axios from 'axios';
import Select from 'react-select'; 
import {API_URL} from '../../config.js';


function EditProduct({editSingleData  }) {
	
	const [errorMessage, setErrorMessage] = useState([]);
	const [successMessage, setSuccessMessage] = useState([]);
	const [formData, setFormData] = useState({ 
	    name: editSingleData.name,     
	    price: editSingleData.price,
		quantity: editSingleData.quantity,
		description: editSingleData.description,
	    id: editSingleData.id    
	  });

  useEffect(() => {
    setFormData({
		name: editSingleData.name,     
		price: editSingleData.price,
		quantity: editSingleData.quantity,
		description: editSingleData.description,
		id: editSingleData.id      
		});
  }, [editSingleData]);

  const groupInputRef = useRef(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.put(API_URL+`products/`+formData.id, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
	  setErrorMessage(error.message);
    }
  };

 

 return (
<div className="modal fade" id="edituserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">


         <form onSubmit={handleSubmit}>
			<div className="row">
			<div>
			{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

			</div>
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2"> Name</label>

			<input type="text" name="name"  className="form-control" onChange={handleInputChange} ref={groupInputRef}  value={formData.name} required />
			</div>
			</div>
			<div className="col-md-6">
				<div className="form-group">
				<label className="bold mb-2">Price</label>
				<input type="text" name="price"  className="form-control" onChange={handleInputChange} ref={groupInputRef}  value={formData.price} required />
				</div>
			</div>
			
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2">Quantity</label>
			<input type="text" name="quantity"  className="form-control" onChange={handleInputChange} ref={groupInputRef}  value={formData.quantity} required/>
			</div>
			</div>
			
			
			<div className="col-md-12">
			<div className="form-group">
			<label className="bold mb-2">Description</label>

			<textarea rows="5" name="description" placeholder="Enter file description"  required className="form-control" onChange={handleInputChange} ref={groupInputRef}  value={formData.description}></textarea>
			
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

export default EditProduct