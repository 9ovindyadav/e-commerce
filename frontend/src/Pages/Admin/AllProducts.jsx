import { Sidebar } from "./Dashboard"
import "../../sass/adminAllproducts.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productActions";

export const AllProducts = () => {

  const {products, nHits} = useSelector(State => State.product)
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getAllProducts());
  },[])
  return (
    <div className="dashboard">
      <div className="content">
        <h1>All Products</h1>
        
        <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      
      {
        products?.map((product)=>(
            <tr key={product._id}>
        <td><p>{product._id}</p></td>
        <td><img src={""} alt={product.name} /></td>
        <td><p>{product.name}</p></td>
        <td><p>{product.price}</p></td>
        <td><p>{product.ratings}</p></td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
        ))
      }
    
    </tbody>
  </table>

      </div>
      <Sidebar />
    </div>
  )
}