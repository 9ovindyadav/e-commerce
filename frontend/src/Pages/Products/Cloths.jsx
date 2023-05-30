import { ProductCard } from "./Product-card"
import "../../sass/cloths.scss"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../Redux/Actions/productActions"
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";

export const Cloths = () => {

const [price, setPrice] = useState({state: false, value: null}) ;

  const {products, nHits} = useSelector(State => State.product)
  const dispatch = useDispatch();

  const PanleHandlerForPrice = () => {
             if(price.state === true){
              setPrice({state: false});
             }else{
              setPrice({state: true});
             }
  }

  const filterSubmitHandler = ()=>{
    const newobj = {};
    newobj.price = price.value ;
    console.log(newobj);
    dispatch(getAllProducts(newobj));
  }
  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  return (
    <div className="cloths">
        <div className="filter-bar">
            <div className="heading">
            <h1>Filter by</h1>
            <button onClick={filterSubmitHandler}>Apply</button>
            </div>
           <div className="condition" >
           <div className="title" onClick={PanleHandlerForPrice}>
           <p>Price</p>
             {
              price.state ? <RiArrowUpSLine/> : <RiArrowDownSLine/>  
             }
           </div>
            {price.state && <div className="panel">
                <input type="radio" id="price-1" name="price" onClick={()=>setPrice({value: 500, state: true})}/>
                <label htmlFor="price-1">0 - 500</label><br />
                <input type="radio" id="price-1" name="price" onClick={()=>setPrice({value: 1000, state: true})}/>
                <label htmlFor="price-1">501 - 1000</label><br />
                <input type="radio" id="price-1" name="price" onClick={()=>setPrice({value: 2000, state: true})}/>
                <label htmlFor="price-1">1001 - 2000</label><br />
                <input type="radio" id="price-1" name="price" onClick={()=>setPrice({value: 3000, state: true})}/>
                <label htmlFor="price-1">2001 - 3000</label><br />
            </div>}
           </div>
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