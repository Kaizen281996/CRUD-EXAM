// DATABASE API
import axios from 'axios'

// GET DATA TO API
import React, { useState } from 'react'

// LINK $ link a href
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// ALERT
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css";

// EMPLOYEE ADD VIEW
export default function AddEmployee() {  
  
    // FULLNAME
    const [lastname, setNameLast] = useState('');
    const [firstname, setNameFirst] = useState('');
    const [middlename, setNameMiddle] = useState('');
    
    // BIRTH DATE
    const [month, setBirthMonth] = useState('');  
    const [day, setBirthDay] = useState('');  
    const [year, setBirthYear] = useState('');  

    const [age, setAge] = useState('');
    const agelimit = 3;
    const handleChangeAge = (e) => {
      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {
        setAge(e.target.value.slice(0, agelimit));
      }
    };

    const [address, setAddress] = useState('');
    
    const [contact, setContact] = useState('');
    const contactlimit = 11;
    const handleChangeContact = (e) => {
      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {
        setContact(e.target.value.slice(0, contactlimit));
      }
    };
    
  
    const navigate = useNavigate();

    // ADD IF YES OR NO
    function SubmitAdd(event) {
      if (lastname === '' || firstname === '' || middlename === '' || 
          month === '' || day === '' || year === '' ||
          age === '' || address === '' || contact === '') {
          confirmAlert({
              title: "Alert Message",
              message: "All data is required.",
              buttons: [
                  {
                  label: "OK", 
                  }
              ]
              });
      } else {
          confirmAlert({
                title: "Confirm to save",
                message: "Are you sure to do this.",
                buttons: [
                    {
                    label: "Yes",
                    onClick: () =>  alert("Successfull add",
                                    navigate('/'),
                                    axios.post('http://localhost:8081/api/employee/add', 
                                        {   lastname,
                                            firstname,
                                            middlename,
                                            month,
                                            day,
                                            year,
                                            age,
                                            address,
                                            contact
                                    }))    
                    },
                    {
                    label: "No", 
                    }
                ]
                });
        }
    }
  
      //  GET YEAR
      let maxOffset = 33;
      let thisYear = (new Date()).getFullYear();
      let allYears = [];
      for(let x = 0; x <= maxOffset; x++) {
          allYears.push(thisYear - x)
      }
  
      const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});

    return (   
      <div className='d-flex justify-content-center align-items-center'>  
      <div className='w-50 bg-white rounded p-5'>  
  
          <form> 
  
              <h2 className=''> Add Employee 
                  <Link to="/" className='btn btn-secondary ms-5' style={{float:'right', borderRadius: '4px' }}> Back </Link>
              </h2>    
  
              <div className='mt-3'>   
                  <label htmlFor="" style={{color:'black', fontWeight: '500' }}>
                       Full Name 
                  </label> 
  
                  <input type="text" placeholder='Enter Lastname' className='form-control mb-2 mt-1' 
                  value={lastname} onChange={e => setNameLast(e.target.value)}  required/>  
  
                  <input type="text" placeholder='Enter Firstname' className='form-control mb-2' 
                  value={firstname} onChange={e => setNameFirst(e.target.value)}  required/> 
  
                  <input type="text" placeholder='Enter Middle' className='form-control mb-2' 
                  value={middlename} onChange={e => setNameMiddle(e.target.value)}  required/> 
  
              </div>              
              
              <div className='mt-3'>   
                  <label htmlFor="" style={{color:'black', fontWeight: '500' }}> 
                      Birth Date 
                  </label> 
  
                  <div class="input-group mb-2 mt-1">
                      <select class="form-select" id="month"
                              onChange={e => setBirthMonth(e.target.value)} required>
                      <option selected value=''> Select Month </option>
                      <option value='Janaury'>Janaury</option>
                      <option value='February'>February</option>
                      <option value='M arch'>March</option>
                      <option value='April'>April</option>
                      <option value='May'>May</option>
                      <option value='June'>June</option>
                      <option value='July'>July</option>
                      <option value='August'>August</option>
                      <option value='September'>September</option>
                      <option value='October'>October</option>
                      <option value='November'>November</option>
                      <option value='December'>December</option>
                      </select>
                  <label class="input-group-text" for="month">Options</label>
                  </div>
  
                  <div class="input-group mb-2">
                      <select class="form-select" id="day"
                              onChange={e => setBirthDay(e.target.value)} required>
                      <option selected value=''> Select Day </option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      </select>
                      <label class="input-group-text" for="day">Options</label>
                  </div>
  
                  <div class="input-group mb-2">
                      <select class="form-select" id="year"
                              onChange={e => setBirthYear(e.target.value)} required>
                      <option  selected value=''> Select Year </option>
                          {yearList}
                      </select>
                      <label class="input-group-text" for="year">Options</label>
                  </div>
  
              </div>
  
              <div className='mt-3'>     
                  <label htmlFor="" style={{color:'black', fontWeight: '500' }}> 
                      Age |
                  </label> 

                  <label htmlFor="" className='ms-1' > 
                     + 18
                  </label> 

                  <input type="int" placeholder='Enter Age' className='form-control mt-1 w-25'
                   value={age} onChange={handleChangeAge} required/>           
              </div>  
  
              <div className='mt-3'>     
                  <label htmlFor="" style={{color:'black', fontWeight: '500' }}> 
                      Complte Address 
                  </label>    
  
                  <input type="text" placeholder='Enter Complte Address' className='form-control mt-1'  
                  onChange={e => setAddress(e.target.value)} required/>           
              </div>  
  
              <div className='mt-3'>     
                  <label htmlFor="" style={{color:'black', fontWeight: '500' }} > 
                      Contact Number |
                  </label> 

                  <label htmlFor="" className='ms-1' > 
                     Sample: 0970xxxxxxx
                  </label> 

                  <input type="text" placeholder='Enter Contact Number' className='form-control mt-1 w-50'  
                   value={contact} onChange={handleChangeContact} required/>           
              </div>  
      
          </form>   
          
          <button className='btn btn-success ms-3' 
                  style={{float:'right', borderRadius: '4px' }}
                  onClick={SubmitAdd}> Save 
          </button>
  
      </div>    
      </div>  

    
)};
