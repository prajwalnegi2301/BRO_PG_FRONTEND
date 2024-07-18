import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Profile from './Pages/Profile'
import UpdateDetails from './Pages/UpdateDetails'
import UpdatePassword from './Pages/UpdatePassword'
import UserProfile from './Pages/UserProfile'
import { useContext, useEffect, useState } from 'react'
import { Context } from './main';
import axios from 'axios'
import WhoIAm from './Pages/WhoIAm'
import PayRent from './Pages/PayRent'
import Choose from './Pages/Choose'
import Journey from './Pages/Journey'
import Programs from './Pages/Programs'
import ChatBox from './Pages/ChatBox'
import ComplaintForm from './Pages/Complaint'



const App = ()=> {

  const {isCustomerAuthenticated,setIsCustomerAuthenticated, setUser} = useContext(Context);
 
  useEffect(() => {
    const fetchUsers = async()=>{
      try{
    const { data } = await axios.get('http://localhost:8000/api/v1/user/getCustomer',{
      withCredentials:true,
    });
    
      setIsCustomerAuthenticated(true);
      setUser(data.user);
    
  } catch(error){
    setIsCustomerAuthenticated(false);
    setUser({});
  }
  };
  fetchUsers()
  }, [isCustomerAuthenticated]); 


  return (
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/whoIAm" element={<WhoIAm/>}/>
      {/* <Route path="/updateDetails" element={<UpdateDetails/>}/>
      <Route path="/updatePassword" element={<UpdatePassword/>}/> */}
      <Route path="/userProfile" element={<UserProfile/>}/>
      <Route path="/payRent" element={<PayRent/>}/>
      <Route path="/choose" element={<Choose/>}/>
      <Route path="/journey" element={<Journey/>}/>
      <Route path="/programs" element={<Programs/>}/>
      <Route path="/chatBox" element={<ChatBox/>}/>
      <Route path='/complaint' element={<ComplaintForm/>}/>
      
    </Routes>
    <Footer/>


    </BrowserRouter>
  )
}

export default App
