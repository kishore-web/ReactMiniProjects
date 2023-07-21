// import Clock from "./Clock";

import { useEffect, useState } from "react";
import "./style.css"


function App() {
    const[products , setProducts] = useState([])
    const fetchData = async () =>{
      const data = await fetch("https://dummyjson.com/products?limit=100")
      const dataJson = await data.json()
      if(dataJson && dataJson.products){
      setProducts(dataJson.products)
      }
      console.log(dataJson.products)
    }
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <>
      {
        products.length > 0 && <div
        className="products"> {
          products.slice(0,5).map((prod,id)=>{
            return(
              <span key={id} className="products__container">
                <img src={prod.thumbnail} alt={prod.title} />
                <p>{prod.title}</p> 
              </span>
            )
          }
          )
        }

        </div>
      }

    </>
  );
}

export default App;
