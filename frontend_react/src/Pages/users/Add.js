import React, { useEffect, Component, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select'; 
import {API_URL} from '../../config.js';


function AddUser({ roleData , groupData}) {
	const [name, setName] = useState([]);
	const [email, setEmail] = useState([]);
	const [role, setRole] = useState([])
	const [password, setPassword] = useState([]);
	const [errorMessage, setErrorMessage] = useState([]);
	const [successMessage, setSuccessMessage] = useState([]);
	const navigate = useNavigate();
	const handleAddSubmit = async e => {
    e.preventDefault();
	
        
		try {
			const authToken = 'Bearer '+localStorage.getItem('token');
		
			
			const response = await axios.post(API_URL+'users', {
				name,
				email,
				role,
				password,
			}, {
			  headers: {
				Authorization: authToken,
			  }
			});
		  
		  
		  var result=response.data;

		  	console.log(result);
		  if(result.users != undefined)
		  {

		  	console.log(result.message);
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
 <div className="modal fade" id="adduserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
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
				<label className="bold mb-2">Email</label>
				<input type="text" name="email"  className="form-control" onChange={e => setEmail(e.target.value)}  required />
				</div>
			</div>
			
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2">Role</label>
					<select className="form-control" aria-label="Default select example" data-live-search="true"  required onChange={e => setRole(e.target.value)}>
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
			
			
			<div className="col-md-6">
			<div className="form-group">
			<label className="bold mb-2">Password</label>
     <input type="password" name="password"  className="form-control"  onChange={e => setPassword(e.target.value)}  required />
		
			
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