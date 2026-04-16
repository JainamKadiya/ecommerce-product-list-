// src/App.js
import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import Add2Cart from "./Component/Add2Cart";
// import Home from "./Component/Home";

function App() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>🛍️ Product List</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          listStyle: "none",
          padding: "0",
        }}
      >
    
        {product.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              style={{
                height: "180px",
                width: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <button
              onClick={() => handleAdd(item)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart 🛒
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <Add2Cart />
    </div>
  );
}

export default App;




// // import logo from './logo.svg';
// import { useState, useEffect } from 'react';
// import './App.css';
// import Add2Cart from './Component/Add2Cart';
// import Home from './Component/Home';

// function App() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => setProduct(data.products)) 
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="App">
//       <ul>
//         {product.map((item) => (
//           <li key={item.id}>
            
//             <div style={{height:'100px',width:'100px'}}>
              
//  <img
//     src={item.images[0]}   
//     alt={item.title}
//     style={{ height: '180px', width: '250px', objectFit: 'cover', borderRadius: '8px' }}
//   />
//             </div>
//               {item.title} — ${item.price}
//             <h2>{item.category}</h2>
//             <h2>{item.rating} ⭐</h2>
//           </li>
//         ))}
//       </ul>

//       <Home />
//       <Add2Cart />
//     </div>
//   );
// }

// export default App;
