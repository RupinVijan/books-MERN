import React, { useState } from "react";
import Swal from "sweetalert2";
import Details from "./Details";

function Card(props) {
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
  return (
    <>
      <li className="cards__item">
        <div className="card">
          <div
            className="card__image "
            style={{
              background: `url(${bookCover[Math.floor(Math.random() * 5)]})`,
            }}
          ></div>
          <div className="card__content">
            <div className="card__title">{props.title}</div>
            <p className="card__text">{props.description}</p>
            <div className="card__title">Rs.{props.price}</div>
            <button
              className="btn btn--block card__btn btn-danger my-2"
              onClick={() => {
                var cartItems = localStorage.getItem("userCart");
                if (!cartItems) {
                  cartItems = props.id;
                  localStorage.setItem("userCart", cartItems);
                  Swal.fire("added to Cart!");
                } else {
                  cartItems = cartItems + `,${props.id}`;
                  localStorage.setItem("userCart", cartItems);
                  Swal.fire("added to Cart!");
                }
              }}
            >
              add to cart
            </button>
            <button
              className="btn btn--block card__btn btn-danger my-2"
              onClick={() => {
                handleEditClick(props.id);
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </li>
      <Details
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        editResponse={editResponse}
      />
    </>
  );
}

export default Card;
