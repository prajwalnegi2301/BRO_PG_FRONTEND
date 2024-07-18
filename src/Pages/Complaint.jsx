// import axios from "axios";
// import React, { useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import {
//   FaUser,
//   FaCalendarAlt,
//   FaBuilding,
//   FaDoorOpen,
//   FaPaperPlane,
//   FaCommentAlt,
//   FaMobileAlt,
//   FaClipboardList,
//   FaRedo,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";
// import { Context } from '../main';
// import { useNavigate } from "react-router-dom";

// const ComplaintForm = () => {
//   const [name, setName] = useState("");
//   const [showComplaint, setShowComplaint] = useState(false);
// //   const [phone, setPhone] = useState("");
// //   const [complaintDate, setComplaintDate] = useState("");
// //   const [pgNo, setPgNo] = useState("");
// //   const [roomNo, setRoomNo] = useState("");
//   const [message, setMessage] = useState("");
//   const [complaints, setComplaints] = useState([]);
//   const { isCustomerAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     if (!isCustomerAuthenticated) {
//       navigateTo("/login");
//     }
//   }, [isCustomerAuthenticated]);

//   const toggleShowComplaint = (e) => {
//     e.preventDefault();
//     setShowComplaint(!showComplaint);
//   };

// //   useEffect(() => {
// //     const fetchComplaints = async () => {
// //       try {
// //         const { data } = await axios.get(
// //           'http://localhost:8000/api/v1/user/getMessages',
// //           { withCredentials: true }
// //         );
// //         setComplaints(data.messages);
// //       } catch (error) {
// //         console.error("Error fetching complaints:", error);
        
// //       }
// //     };

// //     fetchComplaints();
// //   }, []);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (name.trim() === "") {
//       toast.error("Please enter your name.");
//       return;
//     }
//     if (message.trim() === "") {
//       toast.error("Please enter your message.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8000/api/v1/user/createMessage", { name, message }, { withCredentials: true });
//       toast.success("Message sent successfully!");
//       setName("");
//       setMessage("");
//     } catch (error) {
//       console.log("Error sending message:", error);
//       toast.error("Failed to send message. Please try again later.");
//     }
//   };


//   return (
//     <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
//         <FaClipboardList className="mr-2" /> Complaint Form
//       </h2>
//       {/* <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaUser className="inline mr-2" /> Name
//           </label>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
     
       
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaBuilding className="inline mr-2" /> Pg No
//           </label>
//           <input
//             type="text"
//             placeholder="Pg No"
//             value={pgNo}
//             onChange={(e) => setPgNo(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaCommentAlt className="inline mr-2" /> Description
//           </label>
//           <input
//             type="text"
//             placeholder="Description"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaDoorOpen className="inline mr-2" /> Room No
//           </label>
//           <input
//             type="text"
//             placeholder="Room No"
//             value={roomNo}
//             onChange={(e) => setRoomNo(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaMobileAlt className="inline mr-2" /> Mobile Number
//           </label>
//           <input
//             type="number"
//             placeholder="Mobile Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             <FaCalendarAlt className="inline mr-2" /> Complaint Date
//           </label>
//           <input
//             type="date"
//             placeholder="Complaint Date"
//             value={complaintDate}
//             onChange={(e) => setComplaintDate(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
//           >
//             <FaPaperPlane className="mr-2" /> Register Complaint
//           </button>
//           <button
//             type="reset"
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
//             onClick={() => {
//               setName("");
//               setPhone("");
//               setComplaintDate("");
//               setPgNo("");
//               setRoomNo("");
//               setDesc("");
//             }}
//           >
//             <FaRedo className="mr-2" /> Reset
//           </button>
//         </div>
//       </form> */}


// <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-slate-800 font-bold mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-slate-800 font-bold mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 rows="5"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 hover:text-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-12"
//             >
//               Submit
//             </button>
//           </form>

//       {/* <div className="mt-6">
//          <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
//           onClick={toggleShowComplaint}
//         >
//           {showComplaint ? (
//             <>
//               <FaEyeSlash className="mr-2" /> Hide Complaints
//             </>
//           ) : (
//             <>
//               <FaEye className="mr-2" /> Show My Complaints
//             </>
//           )}
//         </button>
//         <div>{showComplaint && (
//         <div className="mt-4 w-full max-w-lg">
//           {complaints && complaints.length > 0 ? 
//             complaints.map((complaint) => (
//               <div
//                 key={complaint._id}
//                 // className={`grid grid-cols-4 gap-4 p-2 border-b border-gray-300 ${
//                 //   complaint.status === "Pending"
//                 //     ? "bg-yellow-200 text-yellow-800"
//                 //     : complaint.status === "Accepted"
//                 //     ? "bg-green-200 text-green-800"
//                 //     : "bg-red-200 text-red-800"
//                 // }`}
//               >
//                 <div>{complaint.name}</div>
//                 <div>{complaint.message}</div>
            
//               </div>
//             ))
//            : (
//             <div className="text-center text-gray-700 mt-4">
//               No complaints found!
//             </div>
//           )}
//         </div>
//       ) }</div>

//        </div>  */}

       

      
//     </div>
//   );
// };

// export default ComplaintForm;
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  FaUser,
  FaCalendarAlt,
  FaBuilding,
  FaDoorOpen,
  FaPaperPlane,
  FaCommentAlt,
  FaMobileAlt,
  FaClipboardList,
  FaRedo,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ComplaintForm = () => {
  const [name, setName] = useState("");
  const [showComplaint, setShowComplaint] = useState(false);
  const [message, setMessage] = useState("");
  const [complaints, setComplaints] = useState([]);
  const { isCustomerAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isCustomerAuthenticated) {
      navigateTo("/login");
    }
  }, [isCustomerAuthenticated]);

  const toggleShowComplaint = (e) => {
    e.preventDefault();
    setShowComplaint(!showComplaint);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("Please enter your name.");
      return;
    }
    if (message.trim() === "") {
      toast.error("Please enter your message.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/v1/user/createMessage",
        { name, message },
        { withCredentials: true }
      );
      toast.success("Message sent successfully!");
      setName("");
      setMessage("");
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-600 mb-6 flex items-center"
      >
        <FaClipboardList className="mr-2" /> Complaint Form
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline mr-2" /> Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaCommentAlt className="inline mr-2" /> Message
          </label>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            <FaPaperPlane className="mr-2" /> Submit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="reset"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            onClick={() => {
              setName("");
              setMessage("");
            }}
          >
            <FaRedo className="mr-2" /> Reset
          </motion.button>
        </div>
      </motion.form>

      {/* <motion.div className="mt-6"> */}
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          onClick={toggleShowComplaint}
        >
          {showComplaint ? (
            <>
              <FaEyeSlash className="mr-2" /> Hide Complaints
            </>
          ) : (
            <>
              <FaEye className="mr-2" /> Show My Complaints
            </>
          )}
        </motion.button> */}

        {/* {showComplaint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-4 w-full max-w-lg"
          >
            {complaints && complaints.length > 0 ? (
              complaints.map((complaint) => (
                <div
                  key={complaint._id}
                  className="grid grid-cols-2 gap-4 p-2 border-b border-gray-300 bg-yellow-100 rounded-md"
                >
                  <div className="font-bold text-gray-700">{complaint.name}</div>
                  <div className="text-gray-600">{complaint.message}</div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-700 mt-4">
                No complaints found!
              </div>
            )}
          </motion.div>
        )} */}
      {/* </motion.div> */}
    </div>
  );
};

export default ComplaintForm;
