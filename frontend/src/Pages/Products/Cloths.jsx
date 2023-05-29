import { ProductCard } from "./Product-card"
// import {products} from "../../../products.jsx"
import "../../sass/cloths.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../Redux/Actions/productActions"

export const Cloths = () => {

  const {products, nHits} = useSelector(State => State.product)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  return (
    <div className="cloths">
        <div className="filter-bar">
            <h1>Filter by</h1>

        </div>
        <div className="product-col">
        {
          products?.map(({_id,image,name,price,description,ratings,reviews})=>(
            
          
            <ProductCard key={_id} ProID={_id} ProImg={image} 
                     ProName={name} 
                     ProPrice={price} 
                     ProDesc={description} 
                     ProRating={ratings} 
                     ProReviews={reviews} />
      
          ))
        }
        </div>
    </div>
  )
}