// import Clock from "./Clock";

import { useEffect, useState } from "react";


function App() {
    const[products , setProducts] = useState([])
    const fetchData = async () =>{
      const data = await fetch("https://dummyjson.com/products?limit=100")
      const dataJson = await data.json()
      setProducts(dataJson.products)
    }
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
