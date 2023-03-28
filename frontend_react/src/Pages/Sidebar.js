 import React from 'react';
import {} from 'react-router-dom';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';  

function Sidebar({ handlelogout }) {  
   
        return (
      <div className="sidebar-left">
            <div className="sidebar-left-pad">
               <div className="colse-sidebar">
                 
               </div>
               <div className="text-center"><img src={logo} className="img-fluid s-logo" alt="img"/></div>
               <div className="sidebar-ul">
                 
               <div className="mb-2 mb-lg-4"></div>
                  <ul className="list-unstyled">
                    
   
                   
              
                      <li>
                        <Link to="/productPage" >
                           <div className="sm-icon"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg></div>
                           Product List
                        </Link>
                     </li>

  {localStorage.getItem('role') == 'Admin' && ( 
                     <li>
                        <Link to="/users" >
                           <div className="sm-icon"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg></div>
                           User List
                        </Link>
                     </li>
    )}          
              
                    <div className="mb-2 mb-lg-5"></div>
                     <li>
                        <a onClick={() => handlelogout()}>
                           <div className="sm-icon"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg></div>
                           Logout
                        </a>
                     </li>
                

                  </ul>
               </div>
              
            </div>
         </div>
       )
}

export default Sidebar
       