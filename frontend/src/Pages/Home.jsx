import { Link } from "react-router-dom"
import "../sass/home.scss"

const category = [
{
  title:"Sport's wear",
  path: "/sale"
}
]

const products = [
  {
    ProID:"hjadhgamga78135825282462",
    ProImg:"https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
  },
  {
    ProID:"hjadhgamga781358252824634",
    ProImg:"https://m.media-amazon.com/images/I/61iKv6-unXL._UY879_.jpg",
    ProName:"Home brand",
    ProPrice:"$90.00",
    ProDesc: "available in 5 different colors",
    ProRating: 5,
    ProReviews: 200
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

const ProductCard = ({ProID,ProImg,ProName,ProPrice,ProDesc,ProRating,ProReviews}) => {

  return(
    <div className="product-card">
      <Link style={{margin:0,padding:0,borderRadius:0,background:"none"}} to={`/product/${ProID}`}>
      <div className="img">
        <img src={ProImg} alt={ProName} />
      </div>
      <div className="title">
      <h2>{ProName}</h2>
      <h2>{ProPrice}</h2>
      </div>
      <p>{ProDesc}</p>
      <p>{ProRating} ({ProReviews})</p>
      </Link>
      <button className="btn-transparent">Add to Cart</button>
    </div>
  )
}