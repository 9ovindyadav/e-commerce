import { Link } from "react-router-dom"


export const ProductCard = ({ProID,ProImg,ProName,ProPrice,ProDesc,ProRating,ProReviews}) => {

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