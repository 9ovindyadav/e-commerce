import { Sidebar } from "./Dashboard"
import "../../sass/adminAllproducts.scss"
import {products} from "../../../products.jsx";

export const AllProducts = () => {
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
        products.map((product,index)=>(
            <tr key={index}>
        <td><p>{product.ProID}</p></td>
        <td><img src={product.ProImg} alt={product.ProName} /></td>
        <td><p>{product.ProName}</p></td>
        <td><p>{product.ProPrice}</p></td>
        <td><p>{product.ProRating}</p></td>
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