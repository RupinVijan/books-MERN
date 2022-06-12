import React from "react";
import BooksCarousal from "../components/BooksCarousal";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <BooksCarousal
        topic="New Books "
        apiLink="http://localhost:8080/api/book"
      />
      <BooksCarousal
        topic="Trending"
        apiLink="http://localhost:8080/api/books/search?category=trending"
      />
      <BooksCarousal
        topic="Drama"
        apiLink="http://localhost:8080/api/books/search?category=drama"
      />
      <Footer />
    </>
  );
}

export default Home;
