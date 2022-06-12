import React, { useState } from "react";
import Details from "./Details";
import "../assets/css/cart.css";
import Swal from "sweetalert2";

function CartCards(props) {
  const bookCover = [
    "https://img.freepik.com/free-psd/magazine-mockup_358694-3235.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708",
    "https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-308.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708",
    "https://img.freepik.com/free-psd/front-view-two-hard-cover-book-mockup_1150-37607.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708",
    "https://img.freepik.com/free-psd/top-view-bookss-with-pen-flowers_23-2148568929.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708",
    "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?size=338&ext=jpg&ga=GA1.2.540476265.1642946708",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editResponse, setEditResponse] = useState({});
  const handleEditClick = async (id) => {
    setIsModalOpen(true);
    const resData = await fetch(`http://localhost:8080/api/book/${id}`);
    const res = await resData.json();
    setEditResponse(res.response);
  };
  function arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }
  function removeFromCart(id) {
    let cartItems = localStorage.getItem("userCart");
    if (!cartItems) {
      Swal.fire("UNDERFLOW!");
    } else {
      let cartList = cartItems.split(",");
      let cardIds = arrayRemove(cartList, id);
      cardIds.join(",");
      localStorage.setItem("userCart", cardIds);
      Swal.fire("Item Removed Successfully!");
      window.location = "/cart";
    }
  }
  return (
    <>
      <div className="card col-md-12 p-3">
        <div className="row ">
          <div className="col-md-8">
            <div className="card-block">
              <h6 className="card-title text-right">{props.title}</h6>
              <p className="card-text text-justify">{props.description}</p>
              <h6 className="card-title text-right">Rs.{props.price}</h6>
              <button
                className="btn btn-danger"
                onClick={() => handleEditClick(props.id)}
              >
                read more...
              </button>
              <button
                className={`btn btn-danger ${props.remove}`}
                onClick={() => removeFromCart(props.id)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="w-50"
              src={bookCover[Math.floor(Math.random() * 5)]}
            />
          </div>
        </div>
      </div>
      <Details
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        editResponse={editResponse}
      />
    </>
  );
}

export default CartCards;
