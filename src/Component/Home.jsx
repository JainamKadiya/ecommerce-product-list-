import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
          <button
            onClick={() => dispatch(addToCart(item))}
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;



// import React, { useEffect, useState } from 'react'

// function Home() {

  
//     return (
//     <div> 

//     <h1>Products</h1>


    

//     </div>
//   )
// }

// export default Home
//  <h2>{item.rating} ⭐</h2>

