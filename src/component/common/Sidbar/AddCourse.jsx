import React, { useRef, useState } from "react";
import { addCourse } from "../../Api/Api";

const AddCourse = () => {
  const [showImg, setShowImg] = useState("");
  const [getValue, setGetValue]=useState({
   description:'',
    slug:'',
    title:'',


  })
  const[slug,setSlug]=useState('')
  const handleChange = (e) =>{
    
    let { name, value } = e.target;
    setGetValue({ ...getValue, [name]:value });
if(name==="title"){
  const slugTitle = value.split(" ").join("-")
    console.log(slugTitle)
    setSlug(slugTitle)
}

    

  }

  console.log(getValue)

  const handlechange = (e) => {
    setShowImg(URL.createObjectURL(e.target.files[0]));
  };

  console.log(showImg);

  const imageRef = useRef(null);

  const handleImage = () => {
    imageRef.current.click();
  };
  const getCourse=async()=>{

    const formData=new FormData();
    formData.append('title',getValue.title)
    formData.append('description',getValue.description)
    formData.append('slug',slug)
    const res = await  addCourse(formData,showImg);
    console.log(res)
  }

  return (
    <div className="main-add shadow p-4 " >
      <h1>Add New Course</h1>
      <p className="pera ">Lable*</p>
      <div className="inputs shadow">
       
        <input type="text " placeholder="Write Course Title" name='title' onChange={handleChange} />
      </div>
      <p className="pera mt-4 ">Course Slug URL*</p>
      <div className="inputs shadow  ">
       
        <input type="text" placeholder="Slug "  name='slug' value={slug} readOnly onChange={handleChange}/>
      </div>
      <p className="pera mt-4 ">description</p>
      <div
        className="inputss shadow  "
        style={{ width: "800px", }}
      >
        
        <textarea rows={6} type="text" placeholder="Description" name='Description' onChange={handleChange} />
      </div>
      <div className="showImages">
        <div>
          <h3>Upload File</h3>
          <input
            type="file"
            style={{ display: "none" }}
            ref={imageRef}
            onChange={handlechange}
          />
          <button className="btn  btn-success shadow" onClick={handleImage}>
            Upload Image{" "}
          </button>
        </div>
        <div>
          {showImg && <img src={showImg} alt="" width="200" height="200" />}
        </div>
      </div>
      <div style={{ alignSelf:"flex-end", display:'flex'}}>
      <button className="btn  btn-success shadow ms-auto" onClick={getCourse}>
      Add Course
          </button>

      </div>
    </div>
  );
};

export default AddCourse;
