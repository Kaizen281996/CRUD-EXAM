// DATABASE API
import axios from 'axios'

// GET DATA TO API
import React, { useEffect, useState } from 'react'

// LINK $ link a href
import { Link } from 'react-router-dom'

// DOWNLOAD CSV
import { CSVLink } from "react-csv";

// PAGINATION
import Pagination from '../Components/Pagnination/Pagination'
import { paginate } from '../Components/Pagnination/paginate'

import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css";


// EMPLOYEE LIST VIEW
export default function ListEmployee() {
        const [posts, setPosts] = useState([]);
        const pageSize = 5;
        const [currentPage, setCurrentPage] = useState(1);

    // GET DATA TO API
    useEffect(() => {
        const getPosts = async () => {
          const { data: res } = await axios.get('http://localhost:8081/')
          setPosts(res);
        };
        getPosts();
      }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    // WHILE
    const paginatePosts = paginate (posts, currentPage, pageSize);

    // DELETE ALERT
    const SubmitDelete = async (id) => {
      confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to do this.",
        buttons: [
          {
            label: "Yes",
            onClick: () => alert("Successful Delete",
                           window.location.reload(),
                           axios.delete('http://localhost:8081/api/employee/delete/'+id))    
          },
          {
            label: "No",
            onClick: () => window.location.reload()
          }
        ]
      });
    };

  return (   
    
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>       
    <div className='bg-white rounded p-5'>           

    <h2> Employee List 
      <Link to="/api/employee/add" className='btn btn-success' style={{float:'right', borderRadius: '4px' }}> Add Employee</Link>
    </h2> 

        <table className='table mt-5'>               
        <thead style={{background:'#333', color:'white', textAlign: 'center', fontWeight: 'none' }}>            
            <tr> 
                <th>ID</th>            
                <th>Employee Name</th>     
                <th>Birth Date</th>
                <th>Age</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Action</th>
            </tr>               
        </thead>
        <tbody>  

        {paginatePosts.map((post) => (
            <tr key={post.id}>
            <td>{post.ID}</td>
            <td>{post.Name}</td>
            <td>{post.Birth}</td>   
            <td>{post.Age}</td>
            <td>{post.Address}</td>   
            <td>{post.Contact}</td>     

              <td>
                 <Link to={`/api/employee/update/${post.ID}`} 
                 className='btn btn-primary' 
                 style={{borderRadius: '4px', padding: '2px 8px'}}> 
                    Update 
                 </Link> 

                <button className='btn btn-danger ms-2' style={{borderRadius: '4px', padding: '2px 8px'}} 
                         onClick={e => SubmitDelete(post.ID)}> Delete </button>
              </td>
            </tr>

          ))
        }       

    </tbody>  
    </table>

    <Pagination
        items={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

    <CSVLink data={paginatePosts}>
      <button className='btn btn-success' style={{borderRadius: '4px'}}>Export CSV </button>
    </CSVLink>

    </div>    
    </div>  

)}

