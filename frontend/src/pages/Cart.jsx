import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import CartCards from "../components/CartCards";
import PlaceOrder from "../components/PlaceOrder";

function Cart() {
  const [orderSend, setOrderSend] = useState([]);
  const [Price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [Loading, setLoading] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const handleClick = async () => {
    setIsOrderModalOpen(true);
  };
  const fetchCartItems = async () => {
    const cartList = localStorage.getItem("userCart");
    let cartItemsIds = cartList.split(",");
    setOrderSend(cartItemsIds);
    if (!cartItemsIds) return;
    setLoading(true);
    try {
      let cost = 0;
      const resData = await fetch(`http://localhost:8080/api/book`);
      const res = await resData.json();
      const cartItems = res.response.filter((prop) =>
        cartItemsIds.includes(prop._id)
      );
      cartItems.forEach((item) => {
        cost += item.price;
      });
      setPrice(cost);
      setCart(cartItems);
    } catch (err) {
      Swal({
        title: "Error",
        text: err.response?.data?.msg || err.response?.statusText,
        icon: "error",
      });
    }
    setLoading(false);
  };
  useEffect(() => fetchCartItems, []);
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {cart.map((element) => {
            return (
              <CartCards
                title={element.title}
                remove=""
                description={element.description}
                price={element.price}
                id={element._id}
                key={element._id}
              />
            );
          })}
        </div>
      </div>
      <div className="text-end mx-4 text-12">
        {" "}
        <h4>Total Cost : Rs.{Price} </h4>
        <button
          className="btn btn-danger my-4"
          onClick={() => {
            handleClick();
          }}
        >
          Proceed to Checkout
        </button>
      </div>
      <PlaceOrder
        isOrderModalOpen={isOrderModalOpen}
        setIsOrderModalOpen={setIsOrderModalOpen}
        orderSend={orderSend}
      />
      <Footer />
    </div>
  );
}

export default Cart;
