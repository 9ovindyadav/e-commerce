import {Link} from "react-router-dom";
import "../../sass/dashboard.scss";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">

      </div>
      <Sidebar />
    </div>
  )
}

export const Sidebar = () => {

  return (
    <div className="sidebar">
        <Link to={"/admin/dashboard"}><p>Dashboard</p></Link>
        <Link to={"/admin/product/create"}><p>Orders</p></Link>
        <Link to={"/admin/product/create"}><p>Products</p></Link>
        <Link to={"/admin/product/create"}><p>Create Product</p></Link>
        <Link to={"/admin/product/create"}><p>Users</p></Link>
        <Link to={"/admin/product/create"}><p>Reviews</p></Link>
      </div>
  )
}