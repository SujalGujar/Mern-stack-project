import {useState} from "react";

import axiosIntance from "../../api/axiosIntance";

export const Course = () =>{
    const [FormData,setFormData] = useState({
      title:"",
      description:"",
      thumbnail:"",
      category:"",
      level:"",
      instructor:""
    });
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    

    const handleSubmit = async(id,e) =>{
        e.preventDefault();
        setLoading(false)
        const formData = new FormData(e.target);
        try{
            setLoading(true);
            const response = await axiosIntance.post("/courses/createCourse",formData);
            alert("course created successfully");
            console.log(response)

        }
        catch(error){
            console.error(error);
            alert(error?.response?.data?.message || "Upload failed");


        }
    }


    return<>
   <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
  <h2 className="text-2xl font-bold text-center">
    Create Course
  </h2>

  <div>
    <label className="block mb-1 font-medium">
      Course Title
    </label>
    <input
    value={FormData.title}
    onChange={(e)=>{
        setFormData({
            ...FormData,
            title:e.target.value
        })
    }}
      type="text"
      name="title"
      placeholder="Enter title"
      className="w-full border rounded-lg px-4 py-2"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">
      Description
    </label>
    <textarea
    value={FormData.description}
    onChange={(e)=>{
        setFormData({
            ...FormData,
            description:e.target.value
        })
    }}
      name="description"
      rows="4"
      placeholder="Enter description"
      className="w-full border rounded-lg px-4 py-2"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">
      Thumbnail
    </label>
    <input
    value={FormData.Thumbnail}
      onChange={(e) =>{setFormData({
        ...FormData,
        thumbnail:e.target.value
      })}}
      type="file"
      name="thumbnail"
      accept="image/*"
      className="w-full border rounded-lg px-4 py-2"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">
      Category
    </label>
    <input
    value={FormData.category}
      onChange={(e) =>{setFormData({
        ...FormData,
    categoryategory:e.target.value
      })}}
      type="text"
      name="category"
      placeholder="Web Development"
      className="w-full border rounded-lg px-4 py-2"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">
      Level
    </label>
    <select
      name="level"
      value={FormData.level}
      onChange={(e) =>{setFormData({
        ...FormData,
        level:e.target.value
      })}}
      className="w-full border rounded-lg px-4 py-2"
    >
      <option value="">Select Level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>
  </div>

  

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
  >
    Create Course
  </button>
</form>


    </>
}