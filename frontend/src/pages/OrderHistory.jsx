import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartCards from "../components/CartCards";
import Swal from "sweetalert2";

function OrderHistory() {
  const [orders, setorders] = useState([]);
  const fetchData = async () => {
    let userToken = localStorage.getItem("userToken");
    if (!userToken) {
      Swal.fire("You need to Login First");
      window.location = "/login";
    } else {
      const res = await fetch("http://localhost:8080/api/order", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          userToken: localStorage.getItem("userToken"),
        },
      });
      const resData = await res.json();
      setorders(resData.orderPlaced);
    }
  };
  useEffect(() => fetchData, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orders.map((element) => {
            return (
              <>
                <CartCards
                  title={element.books[0].title}
                  remove="hide"
                  description={element.books[0].description}
                  price={element.books[0].price}
                  id={element.books[0]._id}
                  key={element.books[0]._id}
                />
                <CartCards
                  title={element.books[1].title}
                  remove="hide"
                  description={element.books[1].description}
                  price={element.books[1].price}
                  id={element.books[1]._id}
                  key={element.books[1]._id}
                />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistory;
