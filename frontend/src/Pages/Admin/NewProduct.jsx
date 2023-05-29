import { useEffect, useState } from "react"
import { Sidebar } from "./Dashboard";
import {useDispatch, useSelector} from "react-redux";
import "../../sass/newProduct.scss"
import { createProduct } from "../../Redux/Actions/productActions";
import { toast } from "react-hot-toast";

const categories =[
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
]
export const NewProduct = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState("");
  const [category,setCategory] = useState("");
  const [stock,setStock] = useState(0);
  const [images,setImages] = useState([]);
  const [imagesPriview,setImagesPriview] = useState([]);

  const dispatch = useDispatch();

  const createProductSubmitHandler = (e) => {
     e.preventDefault();

     const myForm = {name,price,description,category,stock,images}
    //  const myForm = new FormData();

    //  myForm.set("name",name);
    //  myForm.set("price",price);
    //  myForm.set("description",description);
    //  myForm.set("category",category);
    //  myForm.set("stock",stock);

    //  images.forEach((image)=>{
    //   myForm.append("images",image);
    //  });

     dispatch(createProduct(myForm));
  }

  const createProductImagesChange = (e) => {
       const files = Array.from(e.target.files);

       setImages([]);
       setImagesPriview([]);

       files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if(reader.readyState === 2){
            setImagesPriview((old)=> [...old, reader.result]);
            setImages((old) => [...old, reader.result]);
          }
        }

        reader.readAsDataURL(file);
       })
  }

  const {message, error, loading} = useSelector((State)=>State.product)

  useEffect(()=>{
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    }
  },[loading,message,error])

  return (
    <div className="dashboard">
      <div className="content">
       <div className="newProductContainer">
        <form enctype="multipart/form-data" onSubmit={createProductSubmitHandler}>
           <h1>Create New Product</h1>
            <div>
             <input 
               type="text" 
               placeholder="Product name" 
               required 
               value={name} 
               name="name"
               onChange={(e)=>setName(e.target.value)}
               />
            </div>

            <div>
              <input 
                type="number" 
                placeholder="Price" 
                required 
                onChange={(e)=>setPrice(e.target.value)}
              />
            </div>

            <div>
              <textarea 
                placeholder="Product description" 
                cols="30" 
                rows="1" 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
             <select onChange={(e)=>setCategory(e.target.value)}>
              <option value="">Choose category</option>
            {
              categories.map((category)=>(
                <option value={category} key={category}>{category}</option>
              ))
            }
             </select>
            </div>

            <div>
              <input 
                type="number" 
                placeholder="Stock" 
                required 
                onChange={(e)=>setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input 
                type="file" 
                name="avatar" 
                accept="image/*" 
                multiple onChange={createProductImagesChange}
              />
            </div>

            <div id="createProductFormImage">
              {
                imagesPriview.map((image, index) => (
                  <img src={image} key={index} alt="Product Priview" />
                ))
              }
            </div>

            <button 
              type="submit" 
              id="createProductBtn"
            >Create</button>

        </form>
       </div>
      </div>
      <Sidebar />
    </div>
  )
}