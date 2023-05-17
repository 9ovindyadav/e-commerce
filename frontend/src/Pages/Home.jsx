import { Link } from "react-router-dom"
import "../sass/home.scss"

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
     <section className="category">
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
    </main>
  )
}