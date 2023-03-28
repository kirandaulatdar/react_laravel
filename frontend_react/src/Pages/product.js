import React, { useEffect, Component, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Pages/Header';
import Sidebar from '../Pages/Sidebar';
import ProductList from '../Pages/products/List';
import AddProduct from '../Pages/products/Add';
import EditProduct from '../Pages/products/EditProduct'; 
import DeleteProduct from '../Pages/products/DeleteProduct';
import Swal from 'sweetalert2';
import { API_URL } from '../config';



function Product() {
	
	const [roleData, setRoleData] = useState([]);
	const [groupData, setGroupData] = useState([]);
	const [userData, setUser] = useState([]);
	const [totalPages, setTotalPages] = useState([]);
	 const [currentPages, setCurrentPages] = useState([]);
	 const [modalIdDelete, setModalId] = useState([]);
	 const [editSingleData, setEditData] = useState([]);
	const [addedUserGroup, setGroupUser] = useState([]);
	const [page, setPage] = useState(1);
	
	
 useEffect(() => {
	fetchUser();
  }, [page]);

  const fetchUser = async () => {
    const url = API_URL+'products';
    const authToken = 'Bearer '+localStorage.getItem('token');

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: authToken,
        },
      }); 
    console.log(response.data.products);
	  setUser(response.data.products);	
    } catch (error) {
        navigate('/'); // Redirect to the login page
    }
  };


const navigate = useNavigate();
  
const handlelogout = () => { 
	
    //clearTimeout(timer); // Clear the auto logout timer
    localStorage.removeItem('token'); // Remove the authentication token from local storage
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
	localStorage.removeItem('username');
	localStorage.removeItem('role');
    navigate('/'); // Redirect to the login page
  };


const handleOpenModal = (id) => {
		setModalId(id);
}
	
	const handleDelete = async e => {
		e.preventDefault();
				const url = API_URL+'products/'+modalIdDelete;
				const authToken = 'Bearer '+localStorage.getItem('token');

				try {
				  const response = axios.delete(url, {
					headers: {
					  Authorization: authToken,
					},
				  });
				  
					Swal.fire({
						icon: 'success',
						title: 'Deleted!',
						text: `data has been deleted.`,
						showConfirmButton: false,
						timer: 1500,
					});

					setUser(userData.filter(userData => userData.id !== modalIdDelete));
				  
				} catch (error) {
				  console.error(error);
				}            
   }
			
	const handleEdit = async (id) => {
				const url = API_URL+'products/'+id;
				const authToken = 'Bearer '+localStorage.getItem('token');
				try {
				const response = await axios.get(url, {
					headers: {
					Authorization: authToken,
					},
				});		
				setEditData(response.data);	  
				} catch (error) {
				console.error(error.message);
				}   
    }
	

			
  return (
    <>
	<div className="wrapper">
      <header><Header/>
      <Sidebar handlelogout={handlelogout} /></header>
      <main>
	     <ProductList userData={userData}
				handleOpenModal= {handleOpenModal}
				handleEdit= {handleEdit}	
				/>
			</main>
      <footer></footer>
	</div>
	 
	 
<AddProduct />
 <EditProduct 
			editSingleData= {editSingleData} 	
/>
     

<div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      
      <div className="modal-body">
         <form onSubmit={handleDelete}>
		 
        <div className="row pt-4 pb-4">
         <div className="col-md-12 text-center">
                                            <h4 className="bold mb-4">Are you sure you want to delete this item</h4>
         </div>
         
         <div className="col-12 text-center">
            <button type="button" className="btn btn-theme bg-grey" data-bs-dismiss="modal"  >No</button>&nbsp;
            <button type="submit" className="btn btn-theme">Sure</button>
         </div>
        </div>
     </form>
      </div>
      
    </div>
  </div>
</div>
	
    </>
  );
}

export default Product;
