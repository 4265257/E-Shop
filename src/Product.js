import "./Product.css";
import { StateProvider, useStateValue } from "./StateProvider";
import { useContext } from "react";


function Product(props) {
  console.log("data", props);
  const {cartItems, addToCart,  RemoveFromCart} = useStateValue(StateProvider)
  const { id, title, price, rating, image } = props.product;
  //const [{cartItems }, dispatch] = useStateValue();
  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       title: props.title,
  //       price: props.price,
  //       rating: props.rating,
  //       image: props.image,
  //     },
  //   });
  // };

  const cartItemAmount = cartItems[id]
  return (
    <div className="product">
      <div className="product_info">
        <p>
          <b>{title}</b>
        </p>
        <p className="product_price">{price}$</p>
        <div className="product_rating">⭐⭐⭐⭐⭐</div> 
          <button onClick={() => addToCart(id)} className="button">
            Add to basket {cartItemAmount > 0 &&  <>
              ({cartItemAmount}) 
            </>
               }
            </button> 
         </div>
    </div>
  );
}

export default Product;

// {props.products.map((product, index) => (
//   <div key={index} className="product_info">
//     <p>{product.title}</p>
//     <p className="product_price">{product.price}</p>
//     {/* <div className="product_rating">⭐⭐⭐⭐⭐</div> */}
//    <button onClick={() => addToBasket(product)} className="button">Add to basket</button>
//   </div>
// ))}

// import "./Product.css";
// //import { products } from "./data/data";
// import { useStateValue  } from "./StateProvider";

// function Product(props) {
// const [state, dispatch] = useStateValue()
// const addToBasket = (product) =>{
//   dispatch({
//     type:"ADD_TO_BASKET",
//     item:{
//       title: product.title,
//       price: product.price,
//       rating: product.rating,
//       image: product.image,
//     },
//   });
// };
// return (
//   <div className="product">
//        {props.products.pmap((product, index) => (

//           <div key={index} className="product_info">
//           <p>{product.title}</p>
//           <p className="product_price">{product.price}</p>
//           {/* <div className="product_rating">⭐⭐⭐⭐⭐</div> */}
//           {/* <img src={product.image} alt={product.title} />
//           onClick={addToBasket}
//         className="button">Add to basket</button>*/}
//         </div>
//       )
//       )
//     }
//     </div>
//   );
// }

// export default Product;
