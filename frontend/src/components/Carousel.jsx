import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Card = ({ image }) => {
  return (
    <div className="">
      <img src={image} alt="" className="" />
    </div>
  );
};

const HomeCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      showThumbs={false}
      infinite={true}
      autoPlay={true}
      showStatus={false}
      showArrows={true}
      swipeable={"mobile" ? false : true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      autoPlaySpeed={4000}
    >
      <Card image="https://img.freepik.com/free-vector/library-with-books-shelves-laptop-table_107791-1758.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708"></Card>
      <Card image="https://img.freepik.com/free-vector/people-library-flat-vector-illustration_74855-6607.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708"></Card>
      <Card image="https://img.freepik.com/free-vector/old-vip-library-interior-with-bookcases_107791-7589.jpg?size=626&ext=jpg&ga=GA1.2.540476265.1642946708"></Card>
    </Carousel>
  );
};

export default HomeCarousel;
