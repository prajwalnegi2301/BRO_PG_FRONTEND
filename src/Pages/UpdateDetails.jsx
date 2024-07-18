import React, { useContext, useEffect, useState } from 'react'
import { Context} from '../main'
import { toast } from 'react-toastify';
import MouseTracker from './MouseTracker';






const UpdateDetails = () => {
  const {isCustomerAuthenticated, setIsCustomerAuthenticated} = useContext(Context);
const [name, setName] = useState("");
const [dob, setDob] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("");

const[property,setProperty] = useState("");

const updateDetails = async(id)=>{
  const updatedDetails = property.find((property)=> property._id === id);
  const {data} = await axios.put(`http://localhost:8000/api/v1/user/updateCustomerDetails/${id}`,updatedproperty,{
    withCredentials:true,
  })
  .then((res)=>{
    console.log(res.data);
    toast.success(res.data.message);
  
  })
  .catch((error)=>{
    toast.error(error.response.data.message);
  })
}
const handleInputChange = (propertyId, field, value)=>{
  setProperty((prevProperty)=>
  prevProperty.map((property)=>
    property._id === propertyId ? { 
      ...property, [field]:value} : property
    )
  );
}
  return (
    <div>
      {/* <MouseTracker/> */}
     <form  className="space-y-4">
        <div className="flex items-center border-b border-gray-300 py-2">
        
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-b border-gray-300 py-2">
        
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-b border-gray-300 py-2">
      
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-b border-gray-300 py-2">
       
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>
        <div>
          {property && property.length > 0 ?(
            property.map((element)=>{
              return(
                <div key={element._id}>
                  <input type="text" value={element.location} onChange={(e)=>handleInputChange(element._id, "location", e.target.value)} />
                </div>

              )
            })
          ):(<h1>No Property</h1>
        )}
        </div>

        <button onClick={()=>updateTask(element._id)} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
      
    </div>
  )
}

export default UpdateDetails
