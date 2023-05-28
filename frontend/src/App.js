import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListEmployee from './Pages/ListEmployee';
import AddEmployee from './Pages/AddEmployee';
import UpdateEmployee from './Pages/UpdateEmployee';



function App() {  
  return (    
  <div className="App">      
  <BrowserRouter>        
    <Routes>       
      <Route path='/' element={<ListEmployee/>}></Route>         
      <Route path='/api/employee/add' element={<AddEmployee/>}></Route>     
      <Route path='/api/employee/update/:id' element={<UpdateEmployee/>}></Route>     
    </Routes>      
  </BrowserRouter>   
   </div>  
   
);}

export default App;