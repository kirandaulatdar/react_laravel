import React, { useEffect, Component, useState,useRef  } from 'react';
import axios from 'axios';
import Select from 'react-select'; 
import {API_URL} from '../../config.js';


function EditProduct({editSingleData  }) {
	
	const [errorMessage, setErrorMessage] = useState([]);
	const [successMessage, setSuccessMessage] = useState([]);
	const [formData, setFormData] = useState({ 
	    name: editSingleData.name,     
	    email: editSingleData.email,
		role: editSingleData.role,
	    id: editSingleData.id    
	  });

  useEffect(() => {
    setFormData({
		name: editSingleData.name,     
		email: editSingleData.email,
		role: editSingleData.role,
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

      const response = await axios.put(API_URL+`users/`+formData.id, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });   
	  var result=response.data; 

	  console.log(response.data);
		if(result.User != undefined)
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
        <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
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
				<label className="bold mb-2">Email</label>
				<input type="text" name="email"  className="form-control" onChange={handleInputChange} ref={groupInputRef}  value={formData.email} required />
				</div>
			</div>
			
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2">Role</label>

			<select className="form-control" aria-label="Default select example" data-live-search="true"  required onChange={handleInputChange} ref={groupInputRef}  value={formData.role} required>
					<option value="" selected>Select User Type</option>
					
					<option key='1' value="Admin">
					     Admin
					</option>
						<option key='2' value="Moderator">
					     Moderator
					</option>
						<option key='3' value="Client">
					     Client
					</option>
					
					</select>

			
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