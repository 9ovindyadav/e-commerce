import { Link } from "react-router-dom"
import "../sass/home.scss"
import { ProductCard } from "./Products/Product-card"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllProducts } from "../Redux/Actions/productActions"
import category from "../../category.json";

export const Home = () => {
  
  const {products} = useSelector(State => State.product);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  return (
    <main>
      <section>
        <div className="home-top">
          <div className="text">
          <h1>Shopping And Department Store</h1>
          <p>Shopping is a bit of relaxing hobby for me, which is somethimes troubling for the bank balance.</p>
          <Link to={"/sale"}><button>Buy Now</button></Link>
          </div>
        </div>
      </section>

     <section className="home-section">
      <h1>Shop Our Top Categories</h1>
      <div className="roller">
        {
          category.map((item)=>(
           
               <Link to={item.path} key={item.i}>
               <h2>{item.title}</h2>
               </Link>
    
          ))
        }
      </div>
     </section>

     <section className="home-section">
      <h1>Today's best deal for you</h1>
      <div className="roller">
        {
          products?.map(({_id,images,name,price,description,ratings,reviews})=>(
            
          
            <ProductCard key={_id} ProID={_id} ProImg={images} 
                     ProName={name} 
                     ProPrice={price} 
                     ProDesc={description} 
                     ProRating={ratings} 
                     ProReviews={reviews} />
      
          ))
        }
      </div>
     </section>
    </main>
  )
}

