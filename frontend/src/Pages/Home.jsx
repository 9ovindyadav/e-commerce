import { Link } from "react-router-dom"
import "../sass/home.scss"
import { ProductCard } from "./Products/Product-card"
import {products} from "../../products.jsx"

const category = [
{
  title:"Sport's wear",
  path: "/sale"
},
{
  title:"Sport's wear",
  path: "/sale"
},
{
  title:"Sport's wear",
  path: "/sale"
},
{
  title:"Sport's wear",
  path: "/sale"
}
]



export const Home = () => {

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
     </section>
    </main>
  )
}

