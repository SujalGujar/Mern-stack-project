// import axios from 'axios';
// import axiosIntance from '../../api/axiosIntance';
// import { useState } from 'react';
// const Register =()=>{
// const[formData,setformData] = useState({
//     name : "",
//     emailId :"",
//     password : ""
// })
// const navigate = useNavigate()
// const [error,setError] = useState(null);
// const[loading,setLoading] = useState(false);


// const handleRegister = async(e) =>{
//     e.preventDefault();
//     setLoading(true);
//     try{
//         setLoading(true);
//         const response = await axiosIntance.post("/auth/register",formData)

//         console.log(response.data);

//     }catch(error){
//         console.log(error)
//         setError(error?.data?.response||"somethings wents wrong in frontend");
//     }
//     finally{
//         setLoading(false);
//     }
// }

// return(<>
//     <div className='min-h-70 w-full flex item-center justif-center bg-red-300'>
//         <form action="submit" onSubmit={handleRegister}>
//             <div className='flex item-center justif-center'>
//                 <h1 className='text-2xl text-black'>Register the User</h1>
               
//          <div className="mb-4">
//             <label className='block mb-2 font-medium'>Name:</label>
//             <input type="text" value={formData.name}  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) =>setformData({...formData,name:e.target.value})}  placeholder='enter the name' />
//           <label className="block mb-2 font-medium">
//             Email
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={formData.emailId}
//             onChange={(e) =>
//               setformData({
//                 ...formData,
//                 emailId: e.target.value,
//               })
//             }
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 font-medium">
//             Password
//           </label>

//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={(e) =>
//               setformData({
//                 ...formData,
//                 password: e.target.value,
//               })
//             }
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//             </div>
//             <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//         >
//           {loading ? "Register in..." : "Register"}
//         </button>
//         <button navigate={</Login>}>..Login</button>
//         </form>
//     </div>

// </>)
// }

// export default Register;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosIntance from "../../api/axiosIntance";
import Login from "./Login";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    role:"Admin,instructor,student"
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await axiosIntance.post(
        "/auth/register",
        formData
      );

      console.log(response.data);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Register User
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={formData.emailId}
            onChange={(e) =>
              setFormData({
                ...formData,
                emailId: e.target.value,
              })
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block mb-2 font-medium">Role:</label>
          <select value={formData.role} onChange={(e) =>{
            
            setFormData({
              ...formData,
              role:e.target.value
            })
             className="w-full border rounded-lg px-4 py-3"
          }} name="role" id="">
           <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="instructor">instructor</option>
            <option value="student">student</option>
          </select>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;