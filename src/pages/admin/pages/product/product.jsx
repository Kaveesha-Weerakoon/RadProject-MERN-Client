import Single from "../../components/single/single"
import { singleProduct } from "../../data"
import "./product.css"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Product