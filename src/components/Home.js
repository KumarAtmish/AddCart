import React from "react";
import "./Home.css";
function Home(props) {
  //console.warn("home", props.data);
  console.warn("props", props);
  return (
    <div>
      <div>
        <span className="data">{props.data.length}</span>
        <img
          className="add-to-card"
          src="https://image.flaticon.com/icons/png/512/126/126083.png"
        />
      </div>
      <h1>Home Component</h1>
      <div className="img-wrapper item">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71E5zB1qbIL._SX466_.jpg" />
      </div>
      <div className="text-wrapper item">
        <span>I-phone</span>
        <br />
        <span>Price : Rs 1000.00</span>
      </div>
      <div>
        <button
          className="btn-wrapper"
          onClick={() =>
            props.addToCartHandler({ price: 1000, name: "i phone 12" })
          }
        >
          Add To Cart
        </button>
        <button
          className="remove-cart-btn"
          onClick={() => {
            props.removeToCartHandler();
          }}
        >
          Remove To Cart
        </button>
      </div>
    </div>
  );
}
export default Home;
