import React, { useState, useEffect } from "react";
import Card from "./Card";

function BooksCarousal(props) {
  const [bookData, setbookData] = useState([]);
  const callAPIs = async () => {
    const response = await fetch(props.apiLink);
    const resData = await response.json();
    setbookData(resData.response);
  };
  useEffect(() => {
    callAPIs();
  }, []);
  return (
    <>
      <h1 className="text-center display-3"> {props.topic}</h1>
      <ul className="cards">
        {bookData.map((element) => {
          return (
            <Card
              title={element.title}
              description={element.description}
              price={element.price}
              id={element._id}
              key={element._id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default BooksCarousal;
