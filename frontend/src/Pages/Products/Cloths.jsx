import { ProductCard } from "./Product-card"
import {products} from "../../../products.jsx"
import "../../sass/cloths.scss"

export const Cloths = () => {
  return (
    <div className="cloths">
        <div className="filter-bar">
            <h1>Filter by</h1>

        </div>
        <div className="product-col">
        {
          products.map(({ProID,ProImg,ProName,ProPrice,ProDesc,ProRating,ProReviews})=>(
            
          
            <ProductCard key={ProID} ProID={ProID} ProImg={ProImg} 
                     ProName={ProName} 
                     ProPrice={ProPrice} 
                     ProDesc={ProDesc} 
                     ProRating={ProRating} 
                     ProReviews={ProReviews} />
      
          ))
        }
        </div>
    </div>
  )
}