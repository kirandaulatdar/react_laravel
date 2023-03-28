import React, { useEffect, Component, useState,useRef  } from 'react';
import axios from 'axios';
import {API_URL} from '../../config.js';

import Select from 'react-select'; 

function UserList({ userData,handleOpenModal,handleEdit }) {
	
const [searchQuery, setSearchQuery] = useState('');
const [selectedGroupIds, setSelectedGroupIds] = useState([]);
const filteredData = userData.filter(item => {
  if (!item.name && !item.email && !item.role) {
    return false;
  } 
  const nameMatch = item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase());
   const emailMatch = item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase());
    const roleMatch = item.role && item.role.toLowerCase().includes(searchQuery.toLowerCase());
  return nameMatch || emailMatch || roleMatch;
});




 return (
    <div className="main">
            <div className="main-content">
                    <div className=" bold ft-23 mb-3">User List</div>
                    <div className="row justify-content-end align-items-end">
                    {localStorage.getItem('role') == 'Admin' && ( 
                     <div className="col-12 mb-3 col-md-12 col-lg-4 col-xl-6">
                        <button className="btn btn-theme" data-bs-toggle="modal" data-bs-target="#adduserModal">+ Add User</button>
                     </div>
                      )}
                     <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                               
                        </div>
                     <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                                 <div className="position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search s-icon" viewBox="0 0 16 16">
                                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                 </svg>
                                                                     <input type="text" placeholder="Search" className="login-form-control" name="" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /></div>
                                                                 </div>
                    </div>
                  <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                              <thead>
                                <tr>
                                 <th scope="col">ID #</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Role</th>
                        {localStorage.getItem('role') === 'Admin' || localStorage.getItem('role') === 'Moderator' ? (
                        <th scope="col">Action</th>
                        ) : null}

                                </tr>
                              </thead>
                              <tbody>
                                {filteredData.map((item) => (
								  
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name} </td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                   
                               {localStorage.getItem('role') === 'Admin' || localStorage.getItem('role') === 'Moderator' ? (

 
                                    <td>
                                       <a onClick={() => handleEdit(item.id)} className="text-primary" data-bs-toggle="modal" data-bs-target="#edituserModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                       </svg></a> &nbsp;
                                        {localStorage.getItem('role') == 'Admin'  && ( 
                                           <a onClick={() => handleOpenModal(item.id)} className="text-danger"  data-bs-toggle="modal" data-bs-target="#deleteModal">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                              </svg>
                                           </a>
                                        )}
                                    </td>
                                    ) : null}
                                </tr>
								))}
 
                                
                                
                              </tbody>
                            </table>
                            </div>
                            
                </div>
            </div>
		)
}

export default UserList