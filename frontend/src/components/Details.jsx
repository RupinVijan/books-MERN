import React from "react";
import Modal from "react-awesome-modal";

function Details({ isModalOpen, setIsModalOpen, editResponse }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        visible={isModalOpen}
        width="80%"
        height="80%"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <li className="">
          <div className="cardee">
            <div
              className="cardee__image "
              style={{
                background: `url(https://unsplash.it/800/600?image=82)`,
              }}
            ></div>
            <div className="card__content">
              <div className="card__title text-10">{editResponse.title}</div>
              <p className="card__text text-12">{editResponse.description}</p>
              <div className="card__title">
                {" "}
                Price : Rs.{editResponse.price}
              </div>
              <div className="card__title">
                {" "}
                Released On : {editResponse.releasedOn}
              </div>
              <div className="card__title"> Author : {editResponse.author}</div>
              <div className="card__title">
                {" "}
                Number of Copies Left : {editResponse.numberOfCopies}
              </div>
            </div>
          </div>
        </li>
      </Modal>
    </>
  );
}

export default Details;
