import React from "react";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";

function PlaceOrder({ isOrderModalOpen, setIsOrderModalOpen, orderSend }) {
  const isLogedIn = () => {
    if (isOrderModalOpen) {
      let userToken = localStorage.getItem("userToken");
      if (!userToken) {
        window.location = "/login";
      } else {
        return (
          <Modal
            visible={isOrderModalOpen}
            width="400px"
            height="140px"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <h3 className="text-center">Do You Want to Place This Order</h3>
            <button className="btn btn-danger" onClick={placeOrder}>
              {" "}
              yes
            </button>
          </Modal>
        );
      }
    }
  };
  const closeModal = () => {
    setIsOrderModalOpen(false);
  };
  async function placeOrder() {
    closeModal();
    const res = await fetch("http://localhost:8080/api/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: localStorage.getItem("userToken"),
        cartList: orderSend,
      }),
    });
    const resData = await res.json();
    if (!resData) {
      Swal.fire({
        icon: "error",
        title: resData.error,
        text: resData.msg,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Order Placed Success!",
        text: resData.msg,
      });
      localStorage.removeItem("userToken");
    }
  }
  return <div>{isLogedIn()}</div>;
}

export default PlaceOrder;
