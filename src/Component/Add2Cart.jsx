// src/Component/Add2Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../cartSlice";

function Add2Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{item.title}</strong> <br />
              ₹{item.price}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => dispatch(decrementQty(item.id))}
                style={{
                  padding: "6px 10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                –
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(incrementQty(item.id))}
                style={{
                  padding: "6px 10px",
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{
                  padding: "6px 10px",
                  background: "gray",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                ❌
              </button>
            </div>
          </div>
        ))
      )}

      {items.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          style={{
            marginTop: "20px",
            background: "black",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Add2Cart;



// import React, { useState } from 'react'
// import { toast } from "react-toastify";

// function Add2Cart({ cart, increaseQty, decreaseQty, deleteItem }) {
//    const [paid, setPaid] = useState(false);

//      const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );


//   const handlePayment = () => {
//     if (cart.length === 0) {
//       toast.warn("Your cart is empty!");
//       return;
//     }
//     setPaid(true);
//     toast.success("Payment Successful ");
//   };

//   return (
//     <div>
//       <div style={{ padding: "20px" }}>
//       <h2>🛒 My Cart</h2>
//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid #ccc",
//                 margin: "10px 0",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "15px" }}
//               >
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   style={{ width: "80px", borderRadius: "5px" }}
//                 />
//                 <div>
//                   <h3>{item.title}</h3>
//                   <p>Price: ${item.price}</p>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     <button onClick={() => decreaseQty(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQty(item.id)}>+</button>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ textAlign: "right" }}>
//                 <h4>$ {item.price * item.quantity}</h4>
//                 <button
//                   onClick={() => deleteItem(item.id)}
//                   style={{
//                     background: "red",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     marginTop: "10px",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           <h2 style={{ marginTop: "20px" }}>Total: $ {totalPrice.toFixed(2)}</h2>

//           <button
//             onClick={handlePayment}
//             style={{
//               marginTop: "15px",
//               padding: "10px 20px",
//               background: "green",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "16px",
//             }}
//           >
//             PAY BILL $ {totalPrice.toFixed(2)}
//           </button>

//           {paid && (
//             <h3 style={{ marginTop: "15px", color: "green" }}>
//              Your payment is Successful!
//             </h3>
//           )}
//         </>
//       )}
//     </div>
//     </div>
//   )
// }

// export default Add2Cart
