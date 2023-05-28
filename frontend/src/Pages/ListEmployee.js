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

export default function Posts() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
      axios.get('http://localhost:8081/')
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])
  
  // PAGNINATION
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatePosts = paginate (APIData, currentPage, pageSize)

  // SEARCH ITEM
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = APIData.filter((item) => {
              return Object.values(item)
                           .join('').toLowerCase()
                           .includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(APIData)
      }
  }


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
<div className='d-flex bg-dark justify-content-center align-items-center' style={{ borderRadius: 'none' }}>       
<div className='w-100 bg-white rounded p-5'>           

    <h2> Employee List 
      <Link to="/api/employee/add" 
            className='btn btn-success' 
            style={{float:'right', borderRadius: '4px' }}> Add Employee
      </Link>
    </h2> 

    <div class="input-group mt-5" >
      <div class="form-outline">
        <input class="form-control" 
        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)} />
      </div>
    </div>

    <table className='table mt-3'>               
    <thead style={{background:'#333', color:'white', fontWeight: 'none' }}>            
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


    {searchInput.length > 1 ? (
        filteredResults.map((item) => {
            return (
            <tbody>               
            <tr>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.Birth}</td>   
                <td>{item.Age}</td>
                <td>{item.Address}</td>   
                <td>{item.Contact}</td>     
                  <td>
                    <Link to={`/api/employee/update/${item.ID}`} 
                          className='btn btn-primary' 
                          style={{borderRadius: '4px', padding: '2px 8px'}}> Update 
                    </Link> 
                    <button className='btn btn-danger ms-2' 
                            style={{borderRadius: '4px', padding: '2px 8px'}} 
                            onClick={e => SubmitDelete(item.ID)}> Delete
                    </button>
                  </td>
              </tr>
              </tbody>   
              )
          })
    ) : ( paginatePosts.map((item) => {
            return (       
            <tbody>                 
            <tr>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.Birth}</td>   
              <td>{item.Age}</td>
              <td>{item.Address}</td>   
              <td>{item.Contact}</td>     
                <td>
                    <Link to={`/api/employee/update/${item.ID}`} 
                          className='btn btn-primary' 
                          style={{borderRadius: '4px', padding: '2px 8px'}}> Update 
                    </Link> 
                    <button className='btn btn-danger ms-2' 
                            style={{borderRadius: '4px', padding: '2px 8px'}} 
                            onClick={e => SubmitDelete(item.ID)}> Delete
                    </button>
                </td>
                </tr>    
                                 
      </tbody>        
      
            )
        })
    )}


    </table>

    <Pagination
    
        items={APIData.length}

        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />     

    <CSVLink data={APIData}>
      <button className='btn btn-success' style={{borderRadius: '4px'}}> Export CSV </button>
    </CSVLink>

    <p className='mt-3'>Exam by: Justine M Hilario | Allrigth recieve 2023 </p>
</div>
</div>    


)};




