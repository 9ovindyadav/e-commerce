import { ProductCard } from "./Product-card"
import "../../sass/cloths.scss"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../Redux/Actions/productActions"
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";

export const Cloths = () => {

  const {products, nHits} = useSelector(State => State.product)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  return (
    <div className="cloths">
        <div className="filter-bar">
            <div className="heading">
            <h1>Filter by</h1>
            </div>
             <FilterConditionForPrice />
             <FilterConditionForBrands />
             <FilterConditionForStock />
        </div>

        <div className="products">
        
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
          <div className="bottom">
            <span>{nHits} Products</span>
            <div className="pages">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
    </div>
  )
}

const FilterConditionForPrice = () => {

  const [isHidden, setIsHidden] = useState(true) ;

  const PanleHandler = () => {
    if(isHidden){
      setIsHidden(false)
    }else{
      setIsHidden(true);
    }
    
}

  return(
    <div className="condition" >
    <div className="title" onClick={PanleHandler}>
    <p>Price</p>
      {
       isHidden ? <RiArrowDownSLine/> : <RiArrowUpSLine/>  
      }
    </div>
     {isHidden ? null : <div className="panel">
         <input type="radio" id="price-1" name="price" />
         <label htmlFor="price-1">0 - 500</label><br />
         <input type="radio" id="price-1" name="price" />
         <label htmlFor="price-1">501 - 1000</label><br />
         <input type="radio" id="price-1" name="price" />
         <label htmlFor="price-1">1001 - 2000</label><br />
         <input type="radio" id="price-1" name="price" />
         <label htmlFor="price-1">2001 - 3000</label><br />
     </div>}
    </div>
  )
}


const FilterConditionForBrands = () => {

  const brands = ["Puma","H & M","Nike","Laxmipati","Dabar"];
  const [isHidden, setIsHidden] = useState(true) ;

  const PanleHandler = () => {
    if(isHidden){
      setIsHidden(false)
    }else{
      setIsHidden(true);
    }
    
}

  return(
    <div className="condition" >
    <div className="title" onClick={PanleHandler}>
    <p>Brands</p>
      {
       isHidden ? <RiArrowDownSLine/> : <RiArrowUpSLine/>  
      }
    </div>
     {isHidden ? null : <div className="panel">
        {
          brands.map((brand)=>(
            <>
             <input type="checkbox" id={brand} name="brand" />
             <label htmlFor={brand}>{brand}</label><br />
            </>
          ))
        }
     </div>}
    </div>
  )
}

const FilterConditionForStock = () => {

  const [isHidden, setIsHidden] = useState(true) ;

  const PanleHandler = () => {
    if(isHidden){
      setIsHidden(false)
    }else{
      setIsHidden(true);
    }
    
}

  return(
    <div className="condition" >
    <div className="title" onClick={PanleHandler}>
    <p>Stock</p>
      {
       isHidden ? <RiArrowDownSLine/> : <RiArrowUpSLine/>  
      }
    </div>
     {isHidden ? null : <div className="panel">
             <input type="checkbox" id={"instock"} name="stock" />
             <label htmlFor={"instock"}>In Stock</label><br />
             <input type="checkbox" id={"outstock"} name="stock" />
             <label htmlFor={"outstock"}>Out of Stock</label><br />
     </div>}
    </div>
  )
}